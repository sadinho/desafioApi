import { Router } from 'express';
import GetAppIndexController from "./GetAppIndexController";

const appRouter: Router = Router();

appRouter.get(
  '/',
  (req, res) => GetAppIndexController.execRest(req, res)
);

export { appRouter }