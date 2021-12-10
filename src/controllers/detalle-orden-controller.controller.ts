import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DetalleOrden} from '../models';
import {DetalleOrdenRepository} from '../repositories';

export class DetalleOrdenControllerController {
  constructor(
    @repository(DetalleOrdenRepository)
    public detalleOrdenRepository : DetalleOrdenRepository,
  ) {}

  @post('/detalle-ordens')
  @response(200, {
    description: 'DetalleOrden model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetalleOrden)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleOrden, {
            title: 'NewDetalleOrden',
            exclude: ['idDetalleOrden'],
          }),
        },
      },
    })
    detalleOrden: Omit<DetalleOrden, 'idDetalleOrden'>,
  ): Promise<DetalleOrden> {
    return this.detalleOrdenRepository.create(detalleOrden);
  }

  @get('/detalle-ordens/count')
  @response(200, {
    description: 'DetalleOrden model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetalleOrden) where?: Where<DetalleOrden>,
  ): Promise<Count> {
    return this.detalleOrdenRepository.count(where);
  }

  @get('/detalle-ordens')
  @response(200, {
    description: 'Array of DetalleOrden model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetalleOrden, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetalleOrden) filter?: Filter<DetalleOrden>,
  ): Promise<DetalleOrden[]> {
    return this.detalleOrdenRepository.find(filter);
  }

  @patch('/detalle-ordens')
  @response(200, {
    description: 'DetalleOrden PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleOrden, {partial: true}),
        },
      },
    })
    detalleOrden: DetalleOrden,
    @param.where(DetalleOrden) where?: Where<DetalleOrden>,
  ): Promise<Count> {
    return this.detalleOrdenRepository.updateAll(detalleOrden, where);
  }

  @get('/detalle-ordens/{id}')
  @response(200, {
    description: 'DetalleOrden model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetalleOrden, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DetalleOrden, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleOrden>
  ): Promise<DetalleOrden> {
    return this.detalleOrdenRepository.findById(id, filter);
  }

  @patch('/detalle-ordens/{id}')
  @response(204, {
    description: 'DetalleOrden PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleOrden, {partial: true}),
        },
      },
    })
    detalleOrden: DetalleOrden,
  ): Promise<void> {
    await this.detalleOrdenRepository.updateById(id, detalleOrden);
  }

  @put('/detalle-ordens/{id}')
  @response(204, {
    description: 'DetalleOrden PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() detalleOrden: DetalleOrden,
  ): Promise<void> {
    await this.detalleOrdenRepository.replaceById(id, detalleOrden);
  }

  @del('/detalle-ordens/{id}')
  @response(204, {
    description: 'DetalleOrden DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.detalleOrdenRepository.deleteById(id);
  }
}
