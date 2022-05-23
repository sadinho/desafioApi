import { CategoriasModel } from '../model/CategoriasModel';
import { ProdutosModel } from '../model/ProdutosModel';
import AncestralRepository from './AncestralRepository';
import ValidationError from '../util/ValidationError';

class CategoriasRepository extends AncestralRepository {
  async createCategoria(nomeCategoria: any) {
    const qr = this.newConnection();
    try {
      await qr.startTransaction();

      const categoriaCreated = qr.manager.create(CategoriasModel, {
        nomeCategoria: nomeCategoria,
      });

      await qr.manager.save(categoriaCreated);
      await qr.commitTransaction();
    }
    catch (error) {
      await qr.rollbackTransaction();
      throw error;
    }
    finally {
      await this.releaseConnection(qr);
    }
  }

  async updateCategoria(categoria: any){
    const qr = this.newConnection();
    try {
      await qr.startTransaction();

      const categoriaUpdated = qr.manager.create(CategoriasModel, {
        id: categoria.id,
        nomeCategoria: categoria.nomeCategoria,
      });

     await qr.manager.save(categoriaUpdated);

      await qr.commitTransaction();

     
    } catch (error) {
      await qr.rollbackTransaction();
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }

  async getCategorias() {
    const qr = this.newConnection();
    try {
      return await qr.manager.createQueryBuilder()
        .select(
          [
            'categorias.id',
            'categorias.nomeCategoria',
          ]
      )
        .from(CategoriasModel, 'categorias')
        .getMany();
    } catch (error: any) {
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }

  async getCategoria(id: number) {
    const qr = this.newConnection();
    try {
      return await qr.manager.createQueryBuilder()
        .select(
          [
            'categorias.id',
            'categorias.nomeCategoria',
          ]
      )
        .from(CategoriasModel, 'categorias')
        .where('categorias.id = :id', { id })
        .getOne();
    } catch (error: any) {
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }

  async deleteCategoria(id: number) {
    const qr = this.newConnection();
    try {
      const categoriaDeleted: any = await qr.manager.findOne(CategoriasModel, id);
      if (!categoriaDeleted) {
        throw new ValidationError('Categoria não encontrada', 404);
      }
      const produtos = await qr.manager.find(ProdutosModel, { idCategoria: id });
      if (produtos.length > 0) {
        throw new ValidationError('Categoria possui produtos associados', 300);
      }
      await qr.manager.remove(categoriaDeleted);
    } catch (error: any) {
      throw error;
    } finally {
      await this.releaseConnection(qr);
    }
  }
}

export default new CategoriasRepository;