import api from '../service/api';

const versionApi = '/api/v1';
export const postProduto = async (produto) => {
  const response = await api.post(`${versionApi}/produto/create`, produto);
  return response;
}

export const putProduto = async (produto) => {
  const response = await api.put(`${versionApi}/produto`, produto);
  return response;
}

export const delProduto = async (id) => {
  const response = await api.delete(`${versionApi}/produto/${id}`);
  console.log('aqui', response);
  return response;
}

export const getProdutos = async () => {
  const response = await api.get(`${versionApi}/produtos`);
  return response;
}

export const getProdutoId = async (id) => {
  const response = await api.get(`${versionApi}/produto/${id}`);
  return response;
}

