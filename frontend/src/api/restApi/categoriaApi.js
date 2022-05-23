import api from '../service/api';

const versionApi = '/api/v1';

export const postCategoria = async (categoria) => {
  const response = await api.post(`${versionApi}/create`, categoria);
  return response;
}

export const uploadProdutos = async (id, produtos) => {
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

