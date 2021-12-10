import {Entity, model, property} from '@loopback/repository';

@model()
export class DetalleOrden extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idDetalleOrden?: string;

  @property({
    type: 'number',
    required: true,
  })
  idProducto: number;

  @property({
    type: 'number',
    required: true,
  })
  idOrden: number;

  @property({
    type: 'number',
    required: true,
  })
  detalleCantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  detallePrecio: number;

  @property({
    type: 'number',
    default: 0,
  })
  detalleDescuento?: number;

  @property({
    type: 'number',
    required: true,
  })
  detalleSubtotal: number;

  @property({
    type: 'boolean',
    default: true,
  })
  detalleBandera?: boolean;


  constructor(data?: Partial<DetalleOrden>) {
    super(data);
  }
}

export interface DetalleOrdenRelations {
  // describe navigational properties here
}

export type DetalleOrdenWithRelations = DetalleOrden & DetalleOrdenRelations;
