import { ProdutosModel } from '../model/ProdutosModel';
import AncestralRepository from './AncestralRepository';

import ValidationError from '../util/ValidationError';

class ProdutosRepository extends AncestralRepository {
  async createProduto(produto: any) {
    const qr = this.newConnection();
    console.log(produto);
    try {
      await qr.startTransaction();
      const produtoCreated = qr.manager.create(ProdutosModel, {
        nomeProduto: produto.nomeProduto,
        idCategoria: produto.id
      });
      await qr.manager.save(produtoCreated);

      await qr.commitTransaction();
    }
    catch(error) {
      await qr.rollbackTransaction();
      throw error;
    }
    finally {
      await this.releaseConnection(qr);
    }
  }

  async updateProduto(produto: any) {
    const qr = this.newConnection();
    try {
      await qr.startTransaction();

      const produtoUpdated = qr.manager.create(ProdutosModel, {
        id: produto.id,
        nomeProduto: produto.nomeProduto,
        idCategoria: produto.idCategoria?? null
      });

      await qr.manager.save(produtoUpdated);

      await qr.commitTransaction();
    } catch (error) {
      await qr.rollbackTransaction();
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }

  async deleteProduto(id: number) {
    const qr = this.newConnection();
    try {
      const produtoDeleted: any = await qr.manager.findOne(ProdutosModel, id);
      if (!produtoDeleted) {
        throw new ValidationError('Produto não encontrado', 404);
      }
      await qr.manager.remove(produtoDeleted);
    } catch (error) {
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }
/* utilizando sql*/
  async getProdutos() {
    const qr = this.newConnection();
    try {
      return await qr.manager.query(
          `
          SELECT
            produtos.id as id,
            produtos.nome_produto as "nomeProduto",
            categorias.nome_categoria as "nomeCategoria"
          FROM produtos
          LEFT JOIN categorias ON produtos.categoria_id = categorias.id
          `
      );
    } catch (error: any) {
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }

  async getProduto(id: number) {
    const qr = this.newConnection();
    try {
      return await qr.manager.query(
          `
          SELECT
            produtos.id as id,
            produtos.nome_produto as "nomeProduto",
            categorias.nome_categoria as "nomeCategoria"
          FROM produtos
          INNER JOIN categorias ON produtos.categoria_id = categorias.id
          WHERE produtos.id = $1
          `,
        [id]
      );
    } catch (error: any) {
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }

  async uploadProduto(id:number, produtoJson: any) {
    const qr = this.newConnection();
    console.log('entrei', produtoJson);
    let produtoParam: any = produtoJson ;
    try {
      for (let produto in produtoParam.produtoJson) {
        produtoParam.produtoJson[produto].idCategoria = id;
      }
      console.log('produtoParam', produtoParam);

      await qr.startTransaction();
      qr.manager.createQueryBuilder()
        .insert()
        .into('produtos')
        .values(produtoParam.produtoJson)
        .execute();
      
      await qr.commitTransaction();
    } catch (error) {
      await qr.rollbackTransaction();
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }
}

export default new ProdutosRepository;

    