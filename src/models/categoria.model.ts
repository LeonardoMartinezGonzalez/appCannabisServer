import {Entity, model, property} from '@loopback/repository';

@model()
export class Categoria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idCategoria: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreCategoria: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionCategoria: string;

  @property({
    type: 'number',
    default: 0,
  })
  ofertaCategoria?: number;

  @property({
    type: 'number',
    default: 0,
  })
  descuentoCategoria?: number;

  @property({
    type: 'string',
    default: 'default.jpg',
  })
  imagenCategoria?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;


  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;
