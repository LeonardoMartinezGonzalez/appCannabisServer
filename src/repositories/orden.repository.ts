import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Orden, OrdenRelations} from '../models';

export class OrdenRepository extends DefaultCrudRepository<
  Orden,
  typeof Orden.prototype.idOrden,
  OrdenRelations
> {
  constructor(
    @inject('datasources.ConnLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Orden, dataSource);
  }
}
