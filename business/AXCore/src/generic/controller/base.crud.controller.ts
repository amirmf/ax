import {
  ArgumentMetadata,
  Body,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
  Type,
  UsePipes,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { ICrudController } from './base.crud.controller.interface';
import { IBaseCRUDService } from '../service/base.crud.service.interface';
import { AbstractEntity } from '../entity/base.entity';
import { ApiOkResponsePaginated, PaginateDto } from '../dto/paginate.dto';
import { IMapper } from '../mapper/base.mapper.interface';
import { BaseOneDto } from '../dto/base.one.dto';
import { BaseQueryDto } from '../dto/base.query.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Injectable()
export class AbstractValidationPipe extends ValidationPipe {
  constructor(
    options: ValidationPipeOptions,
    private readonly targetTypes: { body?: Type; query?: Type; param?: Type },
  ) {
    super(options);
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    const targetType = this.targetTypes[metadata.type];
    if (!targetType) {
      return super.transform(value, metadata);
    }
    return super.transform(value, { ...metadata, metatype: targetType });
  }
}

export function ControllerFactory<
  Entity extends AbstractEntity,
  OneDto extends BaseOneDto,
  QueryDto extends BaseQueryDto,
>(
  oneDto: Type<OneDto>,
  queryDto: Type<QueryDto>,
): Type<ICrudController<OneDto, QueryDto>> {
  const createPipe = new AbstractValidationPipe(
    { whitelist: true, transform: true },
    { body: oneDto },
  );
  const updatePipe = new AbstractValidationPipe(
    { whitelist: true, transform: true },
    { body: oneDto },
  );
  const queryPipe = new AbstractValidationPipe(
    { whitelist: true, transform: true },
    { body: queryDto },
  );

  class CrudController<OneDto extends BaseOneDto, QueryDto extends BaseQueryDto>
    implements ICrudController<OneDto, QueryDto>
  {
    constructor(
      private readonly CRUDService: IBaseCRUDService<Entity, QueryDto>,
      private readonly mapper: IMapper<Entity, OneDto>,
    ) {}

    @Post('/find')
    @UsePipes(queryPipe)
    @ApiBody({ type: queryDto })
    @ApiOkResponsePaginated(oneDto)
    async findAll(
      @Body(queryPipe) dto: QueryDto,
    ): Promise<PaginateDto<OneDto>> {
      const res = await this.CRUDService.findAllByDto(dto);
      return { data: this.mapper.toDtoMany(res.data), count: res.count };
    }

    @Get(':id')
    @ApiResponse({ type: oneDto })
    async findById(@Param('id') id: number): Promise<OneDto> {
      return this.mapper.toDto(await this.CRUDService.findOneById(id));
    }

    @Post('')
    @UsePipes(createPipe)
    @ApiBody({ type: oneDto })
    @ApiResponse({ type: oneDto })
    async create(@Body() dto: OneDto): Promise<OneDto> {
      return this.mapper.toDto(
        await this.CRUDService.create(this.mapper.toEntity(dto)),
      );
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
      this.CRUDService.delete(id);
    }

    @Delete('/many/:ids')
    async deleteMany(@Param('ids') ids: string) {
      this.CRUDService.deleteMany(ids.split(',').map((it) => parseInt(it)));
    }

    @Put()
    @UsePipes(updatePipe)
    @ApiBody({ type: oneDto })
    @ApiResponse({ type: oneDto })
    async update(@Body() dto: OneDto): Promise<OneDto> {
      return this.mapper.toDto(
        await this.CRUDService.save(this.mapper.toEntity(dto)),
      );
    }
  }
  return CrudController;
}
