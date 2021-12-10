import {Entity, model, property} from '@loopback/repository';

@model()
export class Orden extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idOrden: number;

  @property({
    type: 'number',
    required: true,
  })
  idCliente: number;

  @property({
    type: 'date',
    required: true,
  })
  ordenFecha: string;

  @property({
    type: 'number',
    default: 0,
  })
  ordenDescuento?: number;

  @property({
    type: 'number',
    required: true,
  })
  ordenSubtotal: number;

  @property({
    type: 'string',
    required: true,
  })
  metodoPago: string;

  @property({
    type: 'number',
    required: true,
  })
  ordenTotal: number;

  @property({
    type: 'string',
  })
  observaciones?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  estado?: boolean;


  constructor(data?: Partial<Orden>) {
    super(data);
  }
}

export interface OrdenRelations {
  // describe navigational properties here
}

export type OrdenWithRelations = Orden & OrdenRelations;
