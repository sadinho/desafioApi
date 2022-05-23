import { getConnection, QueryRunner, getRepository } from 'typeorm';

class AncestralRepository {
  newConnection(): QueryRunner {
    let result = getConnection().createQueryRunner();
    result.connect();
    return result;
  }

  async releaseConnection(qr: QueryRunner | undefined) {
    if (!qr) {
      return;
    }

    try {
      if (qr.isTransactionActive) {
        await qr.rollbackTransaction();
      } 
    }
    catch(error: any) {
      console.log(':::::::::::::::::::::::>> ATENÇÃO "ERRO GRAVE" NÃO FOI POSSÍVEL FAZER ROLLBACK DA CONEXÃO DE BANCO DE DADOS <<:::::::::::::::::::::::');
      console.log(error.message);
    }
    finally {
      try {
        await qr.release();
      }
      catch(error: any) {
        console.log(':::::::::::::::::::::::>> ATENÇÃO "ERRO GRAVE" NÃO FOI POSSÍVEL LIBERAR A CONEXÃO DE BANCO DE DADOS <<:::::::::::::::::::::::');
        console.log(error.message);
      }
    }
  }

  truncDate(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}

export default AncestralRepository;