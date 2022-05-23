class ValidationError extends Error {
  status?: number;
  message: string;

  constructor(message: string, status?: number) {
    super(message);
    status ? this.status = status: this.status = 400;
    this.message = message;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export default ValidationError;