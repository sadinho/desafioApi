import { Request, Response } from 'express';
import ProdutoRepository from '../../repository/ProdutoRepository';
import AncestralController from '../AncestralController';
import ValidationError from '../../util/ValidationError';

class UploadProdutoController extends AncestralController {
  protected async execute(req: Request, res: Response) {
    const id = await this.getIntParam(req, 'id');
    console.log('req.file', req.body);
   
    const produto: any = await this.getArrayBodyAtt(req, 'dataProdutos');
    /*transforma produto em json*/
    const produtoJson = JSON.parse(produto!);
    console.log('produtoJson', produtoJson);
    /*transforma produto em json*/
    const produtoParam = { produtoJson };
    console.log('produtoParam', produtoParam);
      const result = await ProdutoRepository.uploadProduto(Number(id)!, produtoParam!);
      this.success(res, result);
  }
}
  
export default new UploadProdutoController;