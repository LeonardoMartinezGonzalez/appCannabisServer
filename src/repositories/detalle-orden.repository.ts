import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {DetalleOrden, DetalleOrdenRelations} from '../models';

export class DetalleOrdenRepository extends DefaultCrudRepository<
  DetalleOrden,
  typeof DetalleOrden.prototype.idDetalleOrden,
  DetalleOrdenRelations
> {
  constructor(
    @inject('datasources.ConnLocal') dataSource: ConnLocalDataSource,
  ) {
    super(DetalleOrden, dataSource);
  }
}
