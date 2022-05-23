import api from '../service/api';

const versionApi = '/api/v1';

export const postCategoria = async (categoria) => {
  const response = await api.post(`${versionApi}/create`, categoria);
  return response;
}

export const uploadProdutos = async (id, produtos) => {
  console.log('produtos', JSON.parse(JSON.stringify((produtos))));
  // /* transformar produts em array */
  // let fase1 = produtos.replace(/\n/g, '');
  // let fase2 = fase1.replace(/\r/g, '');
  // let fase3 = fase2.replace(/\t/g, '');
  // let fase4 = fase3.replace(/\s/g, '');
  // let fase5 = fase4.replace('[', '');
  // let fase6 = fase5.replace(']', '');
  
  

  // if (Array.isArray(fase6)) {
  //   dataProdutos = fase6;
  // } else {
  //   dataProdutos.push(fase6);
  // }

  // /* transformar dataProdutos em array json */
  // let dataProdutosJson = JSON.stringify(dataProdutos);
  // let dataProdutosJson2 = dataProdutosJson.replace(/\\/g, '');
  // let dataProdutosJson3 = dataProdutosJson2.replace(/\}"/g, '}');
  // let dataProdutosJson4 = dataProdutosJson3.replace(/\"{/g, '{');
  
  // console.log('dataProdutosJson2', Object.assign(dataProdutosJson2));
  let dataProdutos = [];
  if (Array.isArray(produtos)) {
    dataProdutos = produtos;
  } else {
    dataProdutos.push(produtos);
  }

  const response = await api.post(`${versionApi}/produto/upload/${id}`, { dataProdutos });
  return response;
}

export const putCategoria = async (categoria) => {
  const response = await api.put(`${versionApi}/categoria`, categoria);
  return response;
}

export const delCategoria = async (id) => {
  const response = await api.delete(`${versionApi}/categoria/${id}`);
  return response;
}

export const getCategorias = async () => {
  const response = await api.get(`${versionApi}/categorias`);
  return response;
}

export const getCategoriaId = async (id) => {
  const response = await api.get(`${versionApi}/categoria/${id}`);
  return response;
}

