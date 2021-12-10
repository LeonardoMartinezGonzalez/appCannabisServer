import {Entity, model, property} from '@loopback/repository';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idCliente: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  telefonoCelular: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  apellidos?: string;

  @property({
    type: 'string',
  })
  estado?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
  })
  codigoPostal?: string;

  @property({
    type: 'string',
  })
  telefonoCasa?: string;

  @property({
    type: 'number',
    default: 0,
  })
  banderaFacebook?: number;

  @property({
    type: 'number',
    default: 0,
  })
  banderaGmail?: number;

  @property({
    type: 'string',
    default: 'defaultc.jpg',
  })
  imageFile?: string;

  @property({
    type: 'number',
    default: 1,
  })
  estadoUsuario?: number;


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
