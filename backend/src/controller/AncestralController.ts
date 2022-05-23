import { Request, Response } from 'express'
import httpStatus from 'http-status';
import { Library } from '../util/Library';
import ValidationError from '../util/ValidationError';
import { DefaultResult } from '../util/DefaultResult';

export abstract class AncestralController {
  protected abstract execute(req: Request, res: Response): Promise<void | any>;

  public async execRest(req: Request, res: Response): Promise<void> {
    try {
      await this.execute(req, res);
    }
    catch (err: any) {
      if (err instanceof ValidationError) {
        if (err.status === 404) {
          this.raiseNotFound(res, err.message);
        } else if (err.status === 411) {
          this.raiseLengthRequired(res, err.message);
        } else if (err.status === 401) {
          this.raiseUnauthorized(res, err.message);
        } else {
          this.raiseBadRequest(res, err.message);
        }
      } else {
        this.raiseInternalServerError(res, err);
      }

      try {
        console.log('\n');
        console.log('::::::::::: OCORREU UM PROBLEMA :::::::::::::::');
        console.log('ROUTER: ', req.originalUrl);
        console.log('DESCRIÇÃO: ', err.message);
        console.log('STATUS: ', err.status); 
      }
      catch (error: any) {
        console.log('NÃO FOI POSSÍVEL GERAR O LOG DE ERRO, MOTIVO: ', error.message);
      }
    }
    finally {
      if (!res.headersSent) {
        console.log('::::::::::::::::::::::::::::>> ATENÇÃO "ERRO GRAVE" NENHUM RETORNO DEFINIDO PARA A ROTA <<::::::::::::::::::::::::::::');
        console.log('ROUTER: ', req.originalUrl);
        this.raiseInternalServerError(res, { message: 'Nenhum tipo de retorno definido para a rota: ' + req.originalUrl} );
      }
    }
  }

  public raiseInternalServerError(res: Response, e: any) {
    let result = Library.extractException(e);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(result);
  }

  // ############# RAISE HTTP SUCCESS ###############
  public success(res: Response, dados?: any) {
    return res.status(httpStatus.OK).send(dados);
  }

  public static jsonResponse(res: Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  // ############# RAISE HTTP ERRORS AND STATUS ###############
  /*----------- 400 -*/
  public raiseBadRequest(res: Response, message?: string) {
    return AncestralController.jsonResponse(res, httpStatus.BAD_REQUEST, message ? message : 'Bad request');
  }

  /*----------- 401 -*/
  public raiseUnauthorized(res: Response, message?: string) {
    return AncestralController.jsonResponse(res, httpStatus.UNAUTHORIZED, message ? message : 'Unauthorized');
  }


  /*----------- 404 -*/
  public raiseNotFound(res: Response, message?: string) {
    return AncestralController.jsonResponse(res, httpStatus.NOT_FOUND, message ? message : 'Not found');
  }
 

  /*----------- 411 -*/
  public raiseLengthRequired(res: Response, message?: string) {
    return AncestralController.jsonResponse(res, httpStatus.LENGTH_REQUIRED, message ? message : 'Length Required');
  }

  // TODO: documentar esses retornos aqui abaixo 
  public getIntParam(req: Request, parameterName: string, required: boolean = true, positive: boolean = true): number | undefined {
    let resultInt : number | undefined = parseInt(req.params[parameterName]);
    if ((required && !resultInt) || (positive && resultInt <= 0)) {
      throw new ValidationError(`The param '${parameterName}' is required`);
    }

    if (resultInt == null || resultInt == undefined || isNaN(resultInt)) {
      resultInt = undefined;
    }

    return resultInt;
  }

  public getStrBodyAtt(req: Request, attributeName: string, required: boolean = true): string | undefined {
    const result = req.body[attributeName];
    if (required && result === undefined) {
      throw new ValidationError(`The body attribute '${attributeName}' is required`);
    }

    return result;
  }

  public getIntBodyAtt(req: Request, attributeName: string, required: boolean = true): number | undefined {
    let result : number | undefined = parseInt(req.body[attributeName]);
    if (required && !result) {
      throw new ValidationError(`The body attribute '${attributeName}' is required`);
    }

    if (result == null || result == undefined || isNaN(result)) {
      result = undefined;
    }

    return result;
  }

   public getArrayBodyAtt(req: Request, attributeName: string, required: boolean = true): Array<any> | undefined {
    let result = req.body[attributeName];

    if (result && (!Array.isArray(result))) {
      result = undefined;
    }

    if (result && result.length <= 0) {
      result = undefined;
    }

    if (required && !result) {
      throw new ValidationError(`The body attribute '${attributeName}' is required`);
    }

    return result;
  }
}

export default AncestralController;