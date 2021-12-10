import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idProducto: number;

  @property({
    type: 'object',
    required: true,
  })
  categoria: object;

  @property({
    type: 'string',
    required: true,
  })
  productoNombreCorto: string;

  @property({
    type: 'string',
  })
  productoNombreLargo?: string;

  @property({
    type: 'string',
  })
  productoDescripcion?: string;

  @property({
    type: 'string',
    required: true,
  })
  productoPresentacion: string;

  @property({
    type: 'string',
    required: true,
  })
  productoImagen: string;

  @property({
    type: 'number',
    required: true,
  })
  productoCosto: number;

  @property({
    type: 'number',
    required: true,
  })
  productoGanancia: number;

  @property({
    type: 'number',
    default: 0,
  })
  productoDescuento?: number;

  @property({
    type: 'number',
    default: 1000,
  })
  productoExistencia?: number;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  @property({
    type: 'number',
    default: 1,
  })
  tipo?: number;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
