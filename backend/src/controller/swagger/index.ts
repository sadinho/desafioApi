import { Router } from 'express';
import GetSwaggerJSONController from './GetSwaggerJSONController';


import swaggerUI from "swagger-ui-express";
import swaggerRoot from '../../swagger/root';

const swaggerRouter: Router = Router();

/* Rota do swagger */
swaggerRouter.use('/api-lib', swaggerUI.serve, swaggerUI.setup(swaggerRoot));
swaggerRouter.get('/api-lib-json', (req, res) => GetSwaggerJSONController.execRest(req, res));

export { swaggerRouter }