import { Request, Response } from 'express';
import AncestralController from '../AncestralController';
import swaggerRoot from '../../swagger/root';

class GetSwaggerJSONController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
    this.success(res, swaggerRoot);
  }
}

export default new GetSwaggerJSONController;