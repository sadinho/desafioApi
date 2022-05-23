import { API_PROTOCOL, API_HOST, API_PORT } from '../../environment';
import { Request, Response } from 'express';
import AncestralController from '../AncestralController';

class GetAppIndexController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
    let result = {
      status: 'OK',
      version: '1.0',
      release: '1.0.0',
      swagger: `[${API_PROTOCOL}://${API_HOST}:${API_PORT}/api-lib]`
    }

    this.success(res, result);
  }
}

export default new GetAppIndexController;