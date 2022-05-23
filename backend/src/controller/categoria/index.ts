import { Router } from 'express';
import CreateCategoriaController from './CreateCategoriaController';
import GetItemsCategoriaController from './GetItemCategoriaController';
import DestroyCategoriaController from './DestroyCategoriaController';
import UpdateCategoriaController from './UpdateCategoriaController';
import ShowItensCategoriaController from './ShowItensCategoriaController';

const categoriaRouter: Router = Router();

categoriaRouter.post('/create', (req, res) => CreateCategoriaController.execRest(req, res));
categoriaRouter.get('/categoria/:id', (req, res) => GetItemsCategoriaController.execRest(req, res));
categoriaRouter.delete('/categoria/:id', (req, res) => DestroyCategoriaController.execRest(req, res));
categoriaRouter.put('/categoria', (req, res) => UpdateCategoriaController.execRest(req, res));
categoriaRouter.get('/categorias', (req, res) => ShowItensCategoriaController.execRest(req, res));

export { categoriaRouter }