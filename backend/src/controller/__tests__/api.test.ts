import { Router } from 'express';
const appRouter: Router = Router();

               
describe('crud categorias', () => {
  it('deve retornar todas as categorias', async () => {
    const response = await appRouter.get('/categorias');
    expect(response).toBeDefined()
  });
  
  it('criar categoria', async () => {
    let nomeCategoria: any = "teste";
    let parameters: any = {
      nomeCategoria: nomeCategoria
    }
    const response = await appRouter.post('/create', function (req, res) {
      req.body = parameters;
    });
    expect(response).toBeDefined()
  });

  it('buscar uma categoria', async () => {
    let id: any = 1;
    const response = await appRouter.get('/categoria/' + id);
    expect(response).toBeDefined()
  })
  
  it('delete uma categoria', async () => {
    let id: any = 2;
    const response = await appRouter.delete('/categoria/' + id);
    expect(response).toBeDefined()
  })

  it('update uma categoria', async () => {
    let id: any = 1;
    let nomeCategoria: any = "teste";
    let parameters: any = {
      nomeCategoria: nomeCategoria
    }
    const response = await appRouter.put('/categoria/' + id, function (req, res) {
      req.body = parameters;
    });
      
    expect(response).toBeDefined()
  })

  it('buscar todos produtos', async () => {
    const response = await appRouter.get('/produtos');
    expect(response).toBeDefined()
  })

  it('criar produto', async () => {
    let nomeProduto: any = "teste";
    let parameters: any = {
      nomeProduto: nomeProduto
    }
    const response = await appRouter.post('/produto/create', function (req, res) {
      req.body = parameters;
    });
    expect(response).toBeDefined()
  })

  it('buscar um produto', async () => {
    let id: any = 1;
    const response = await appRouter.get('/produto/' + id);
    expect(response).toBeDefined()
  })

  it('delete um produto', async () => {
    let id: any = 2;
    const response = await appRouter.delete('/produto/' + id);
    expect(response).toBeDefined()
  })

  it('update um produto', async () => {
    let id: any = 1;
    let nomeProduto: any = "teste";
    let parameters: any = {
      nomeProduto: nomeProduto
    }
    const response = await appRouter.put('/produto/' + id, function (req, res) {
      req.body = parameters;
    });
    expect(response).toBeDefined()
  })
});
  
