export class ExistsError extends Error {
  statusCode: number;

  constructor(model: string) {
    super('ExistsError');
    this.name = 'ExistsError';
    this.statusCode = 409;
    this.message = `This ${model} exists`;
  }
}
