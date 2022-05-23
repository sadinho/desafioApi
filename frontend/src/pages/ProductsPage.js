
import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import edit from 'react-useanimations/lib/edit';
import trash2 from 'react-useanimations/lib/trash2';
import { TableComponent } from 'components/Table';
import { getCategorias } from '../api/restApi/categoriaApi';
import { Alert } from 'components/Alert';
import {
  getProdutos,
  postProduto,
  putProduto,
  delProduto,
} from '../api/restApi/produtoApi';
import Select from 'react-select'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap';

const ProductsPage = () => {
  const [modal, setModal] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [persistType, setPersistType] = useState('');
  const [produto, setProduto] = useState({});
  const [categoria, setCategoria] = useState();
  const [selectCategoria, setSelectCategoria] = useState([]);
  const [alert, setAlert] = useState({open: false});

  useEffect(() => {
    setAlert({
      open: true,
      type: 'success',
      message: 'Carregando produtos...',
      timeOpen: 3000,
    });
    getProdutos().then((response) => {
      setProdutos(response.data);
    });
  }, []);

  const createProduct = async () => {
    try {
      const produtoCreate = produto;
      produtoCreate.idCategoria = categoria;
      const response = postProduto(produtoCreate)
      if (response.status === 200) {
        setProdutos(response.data);
        setAlert({
          open: true,
          type: 'success',
          message: 'Produto criado com sucesso!',
          timeOpen: 3000,
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: `Erro ao cadastrar produto! ${error.response.data.message}`,
      });

    } finally {
      setModal(false);
      setProduto({});
    }

  };

  const updateProduct = async () => {
    try {
      const produtoEdit = produto;
      produtoEdit.idCategoria = categoria;
      const response = await putProduto(produtoEdit)
      if (response.status === 200) {
        setProdutos(response.data);
        setAlert({
          open: true,
          type: 'success',
          message: 'Produto editado com sucesso!',
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: `Erro ao atualizar produto! ${error.response.data.message}`,
      });
    } finally {
      setModal(false);
      setProduto({});
    }

  };

  const deleteCategoryProduct = async (produto) => {
    try {
      const produtoEdit = produto;
      delete produtoEdit.idCategoria;
      const response = await putProduto(produtoEdit)
      if (response.status === 200) {
        setProdutos(response.data);
        setAlert({
          open: true,
          type: 'success',
          message: ' Categoria do produto excluída com sucesso!',
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        message: `Erro ao excluir categoria do produto! ${error.response.data.message}`,
      });
    } finally {
      setModal(false);
      setProduto({});
    }
  };

  const deleteProduct = async () => {
    try {
      const response = await delProduto(produto.id)
      setProdutos(response.data);
      setAlert({
        open: true,
        type: 'success',
        message: 'Produto excluído com sucesso!',
      });
    } catch (error) {
      setAlert({
        open: true,
        type: 'danger',
        timeOpen: 3000,
        message: `erro ao excluir produto! ${error.response.data.message}`,
      });
    } finally {
      setModal(false);
      setProduto({});
    };
  }

  const manipulateProduct = () => {
    switch (persistType) {
      case 'Cadastrar':
        createProduct();
        break;
      case 'Editar':
        updateProduct();
        break;
      case 'Excluir':
        deleteProduct();
        break;
      default:
        break;
    }
  };


  const actionTypeModal = async (actionType) => {
    setModalTitle(`${actionType} Produto`);
    setPersistType(actionType);
    const options = await getCategorias();
    if (options.status !== 200) {
      return alert('Erro ao carregar categorias');
    }
    const data = options.data.map((categoria) => {
      return {
        value: categoria.id,
        label: categoria.nomeCategoria,
      };
    });
    setSelectCategoria(data);
    setModal(true);
  }

  const acoesProduto = (produto) => {
    return (
      <Row style={{ cursor: 'pointer' }} >
        <div>
          <UseAnimations
            animation={edit}
            size={20}
            onClick={() => { actionTypeModal('Editar'); setProduto(produto) }}
          />
        </div>
        <div>
          <UseAnimations
            animation={trash2}
            size={20} onClick={() => { actionTypeModal('Excluir'); setProduto(produto) }}
          />
        </div>
      </Row>
    );
  };

  const actionsNameCategory = (produto) => {
    return (
      <Row style={{ cursor: 'pointer', alignItems: 'center' }} >
        <div>
          {produto.nomeCategoria && (
            <UseAnimations animation={trash2} size={20} onClick={() => deleteCategoryProduct(produto)} />
          )}
        </div>
        &nbsp;
        <div>
          {produto.nomeCategoria ? produto.nomeCategoria : 'Sem categoria'}
        </div>
      </Row>
    );
  };

  const dataProducts = produtos.map((produto) => {
    return {
      nomeProduto: produto.nomeProduto,
      nomeCategoria: actionsNameCategory(produto),
      acoes: acoesProduto(produto),
    };
  });


  const toggle = () => setModal(!modal);

  const headerColumn = [
    {
      Header: 'Produto',
      accessor: 'nomeProduto',
      width: 200,
      filterable: true,
    },
    {
      Header: 'Categoria',
      accessor: 'nomeCategoria',
      width: 200,
      filterable: true,
    },
    {
      Header: 'Ações',
      accessor: 'acoes',
    }
  ];

  const exportJson = () => {
    const data = produtos.map((produto) => {
      return {
        nomeProduto: produto.nomeProduto,
        nomeCategoria: produto.nomeCategoria,
      };
    });
    const file = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', 'produtos.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              'Tem certeza que deseja excluir o produto? ' :
              'Preencha os campos abaixo'
          }
          {persistType !== 'Excluir' ? (
            <Col xs="12" md="12">
              <Row>
                <small>Nome do Produto</small>
                <input
                  type="text"
                  className="form-control"
                  value={produto.nomeProduto}
                  onChange={(e) => setProduto({ ...produto, nomeProduto: e.target.value })}
                />
                &nbsp;
                <div>
                  <small>Categoria</small>

                  <Select
                    options={selectCategoria}
                    onChange={(e) => setCategoria(e.value)}
                    Searchable
                    placeholder="Selecione a categoria"
                  />
                </div>
              </Row>
            </Col>
          ) : produto.nomeProduto}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => manipulateProduct()}>
            {persistType}
          </Button>{' '}
          <Button color="secondary" onClick={() => toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <Page title="Produtos">
      <Col md={3}>
        <Button color="primary" size="lg" block onClick={() => actionTypeModal('Cadastrar')}>
          Novo
        </Button>
        <Button color="primary" size="lg" block onClick={() => exportJson()}>
          export json
        </Button>
      </Col>
      &nbsp;
      <TableComponent columns={headerColumn} data={dataProducts} />
      {modalProducts()}

      {alert.open &&
        <Alert type={alert.type} timeOpen={5000} setFlagFalse={() => setAlert({ ...alert, open: false })}>
          {alert.message}
        </Alert>
      }
    </Page>
  );
};

export default ProductsPage;
