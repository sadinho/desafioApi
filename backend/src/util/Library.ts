interface ExceptionDefault {
  message: string;
  data?: any;
}

class Library {
  /* Decodificar uma exceção em ExceptionDefault */
  static extractException(e: any): ExceptionDefault {
    let result : ExceptionDefault = {
      message: ''
    };

    try {
      if (!e) {
        return result;
      }

      const { message, response, driverError, errorMessage } = e;

      if (driverError?.message) {
        result.message = driverError.message;
      }
      else if (errorMessage) {
        result.message = errorMessage;
      }
      else if (message) {
        result.message = message;
      }

      if (response?.data) {
        result.data = response.data;
      }
    }
    catch(ex: any) {
      result.message = ex.message;
      result.data = ex;
    }

    return result;
  }

}

export {
  Library,
  ExceptionDefault
};