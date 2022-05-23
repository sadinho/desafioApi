
import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import edit from 'react-useanimations/lib/edit';
import trash2 from 'react-useanimations/lib/trash2';
import download from 'react-useanimations/lib/download';
import { TableComponent } from 'components/Table';
import { Alert } from 'components/Alert';
import {
  getCategorias,
  postCategoria,
  putCategoria,
  delCategoria,
  uploadProdutos,
} from '../api/restApi/categoriaApi';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap';

const CategoryPage = () => {
  const [modal, setModal] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [persistType, setPersistType] = useState('');
  const [category, setCategory] = useState({});
  const [files, setFiles] = useState("");
  const [abortion, setAbortion] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    type: '',
    message: '',
    timeOpen: 3000,
  });

  useEffect(() => {
    setAlert({
      open: true,
      type: 'success',
      message: 'Carregando categorias...',
    });
    getCategorias().then((response) => {
      setCategorys(response.data);
    });
  }, []);

  const createCategory = async () => {
    try {
      const response = await postCategoria(category);
      if (response.status === 200) {
        setCategorys(response.data);
        setAlert({
          open: true,
          type: 'success',
          message: 'Categoria criada com sucesso!',
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: 'Erro ao criar categoria!',
      });
    } finally {
      setModal(false);
      setCategory({});
    }
  };

  const updateCategory = async () => {
    try {
      const response = await putCategoria(category);
      if (response.status === 200) {
        setCategorys(response.data);
        setAlert({
          open: true,
          type: 'success',
          message: 'Categoria atualizada com sucesso!',
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: 'Erro ao atualizar categoria!',
      });
    } finally {
      setModal(false);
      setCategory({});
    }
  };

  const deleteCategory = async () => {
    try {
      const response = await delCategoria(category.id);
      if (response.status === 200) {
        setCategorys(response.data);
        setAlert({
          open: true,
          type: 'success',
          message: 'Categoria excluída com sucesso!',
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: `Erro ao excluir categoria! ${error.response.data.message}`,
      });
    } finally {
      setModal(false);
      setCategory({});
    }
  };

  const uploadProdutcts = async () => {
    try {
      const response = await uploadProdutos(category.id, files);
      if (response.status === 200) {
        setAlert({
          open: true,
          type: 'success',
          message: 'Produtos importados com sucesso!',
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: `Erro ao importar produtos!`,
      });
    } finally {
      setModal(false);
      setCategory({});
      setAbortion(false);
    }
  };

  const manipulateCategory = () => {
    switch (persistType) {
      case 'Cadastrar':
        createCategory();
        break;
      case 'Editar':
        updateCategory();
        break;
      case 'Excluir':
        deleteCategory();
        break;
      case 'Upload':
        uploadProdutcts();
        break;

      default:
        break;
    }
  };

  const actionTypeModal = (actionType) => {
    setModalTitle(`${actionType} categoria`);
    setPersistType(actionType);
    setModal(true);
  }

  const actionsCategory = (category) => {
    return (
      <Row style={{ cursor: 'pointer' }} >
        <div>
          <UseAnimations
            animation={edit}
            size={20}
            onClick={() => { actionTypeModal('Editar'); setCategory(category) }}
          />
        </div>
        <div>
          <UseAnimations
            animation={trash2}
            size={20} onClick={() => { actionTypeModal('Excluir'); setCategory(category) }}
          />
        </div>

        <div>
          <UseAnimations
            animation={download}
            size={20} onClick={() => { actionTypeModal('Upload'); setCategory(category) }}
          />
        </div>
      </Row>
    );
  };

  const dataCategorys = categorys.map((category) => {
    return {
      nomeCategoria: category.nomeCategoria,
      acoes: actionsCategory(category),
    };
  });


  const toggle = () => setModal(!modal);

  const headerColumn = [
    {
      Header: 'categoria',
      accessor: 'nomeCategoria',
      width: 200,
      filterable: true,
    },
    {
      Header: 'Ações',
      accessor: 'acoes',
    }
  ];

  const handleChange = e => {
    const allowedExtensions = /(\.json)$/i;
    if (!allowedExtensions.exec(e.target.files[0].name)) {
      setAlert({
        open: true,
        type: 'danger',
        message: 'Extensão inválida!',
      });
      setAbortion(true);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = () => {
      setFiles(fileReader.result);
      setAbortion(false);
    };
  };

  const modalProducts = () => {
    return (
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          {
            persistType === 'Excluir' ?
              'Tem certeza que deseja excluir a categoria?  ' :
              'Preencha os campos abaixo'
          }
          {persistType !== 'Excluir' ? (
            <Col md={12}>
              <Row>
                <div><small>Nome da categoria:</small></div>
                {persistType !== 'Upload' && (
                  <input
                    type="text"
                    className="form-control"
                    value={category.nomeCategoria}
                    onChange={(e) => setCategory({ ...category, nomeCategoria: e.target.value })}
                  />
                )}

                {persistType === 'Upload' && (
                  <>
                    &nbsp;
                    <div>{category.nomeCategoria}</div>
                    &nbsp;
                    <div>
                      <small>Importar produtos nessa categoria</small>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

              </Row>
            </Col>
          ) : <div>{category.nomeCategoria} </div>}
        </ModalBody>
        <ModalFooter>
          {!abortion && (
            <>
              <Button color="primary" onClick={() => manipulateCategory()}>
                {persistType}
              </Button>{' '}
            </>
          )}

          <Button color="secondary" onClick={() => toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <Page title="Categorias">
      <Col md={3}>
        <Button color="primary" size="lg" block onClick={() => actionTypeModal('Cadastrar')}>
          Novo
        </Button>
      </Col>
      &nbsp;
      <TableComponent columns={headerColumn} data={dataCategorys} />
      {modalProducts()}
      {alert.open &&
        <Alert type={alert.type} timeOpen={5000} setFlagFalse={() => setAlert({ ...alert, open: false })}>
          {alert.message}
        </Alert>
      }
    </Page>
  );
};

export default CategoryPage;
