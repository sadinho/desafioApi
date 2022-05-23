import { Request, Response } from 'express';
import ProdutoRepository from '../../repository/ProdutoRepository';
import AncestralController from '../AncestralController';

class CreateProdutoController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
  
      const nomeProduto = await this.getStrBodyAtt(req, 'nomeProduto');
      const id = await this.getIntBodyAtt(req, 'idCategoria', false);
      const produto = { id, nomeProduto };
      await ProdutoRepository.createProduto(produto);
      const produtos = await ProdutoRepository.getProdutos();
      this.success(res, produtos);
  }
}
  
export default new CreateProdutoController;