import {BaseController, HttpMethod} from '../../libs/rest/index.js';
import {inject, injectable} from 'inversify';
import {Component} from '../../types/index.js';
import {Logger} from '../../libs/logger/index.js';
import {Request, Response} from 'express';

@injectable()
export class OfferController extends BaseController {
  constructor(@inject(Component.Logger) protected readonly logger: Logger) {
    super(logger);

    this.logger.info('Register routes for CategoryController…');

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.index
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create
    });
  }

  public index(req: Request, res: Response): void {

  }

  public create(req: Request, res: Response): void {

  }
}
