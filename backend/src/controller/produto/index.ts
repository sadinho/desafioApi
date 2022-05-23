import { Router } from 'express';
import CreateProdutoController from './CreateProdutoController';
import GetItemsProdutoController from './GetItemProdutoController';
import DestroyProdutoController from './DestroyProdutoController';
import UpdateProdutoController from './UpdateProdutoController';
import ShowItensProdutoController from './ShowItensProdutoController';
import UploadProdutoController from './UploadProdutoController';

const produtoRouter: Router = Router();

produtoRouter.post('/produto/create', (req, res) => CreateProdutoController.execRest(req, res));
produtoRouter.get('/produto/:id', (req, res) => GetItemsProdutoController.execRest(req, res));
produtoRouter.delete('/produto/:id', (req, res) => DestroyProdutoController.execRest(req, res));
produtoRouter.put('/produto', (req, res) => UpdateProdutoController.execRest(req, res));
produtoRouter.get('/produtos', (req, res) => ShowItensProdutoController.execRest(req, res));
produtoRouter.post('/produto/upload/:id', (req, res) => UploadProdutoController.execRest(req, res));

export { produtoRouter }