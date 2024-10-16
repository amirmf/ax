import { DeepPartial, FindOneOptions, SelectQueryBuilder } from 'typeorm';
import { PaginateDto } from '../dto/paginate.dto';
import { AbstractEntity } from '../entity/base.entity';
import { BaseQueryDto } from '../dto/base.query.dto';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseCRUDService<
  E extends AbstractEntity,
  QueryDto extends BaseQueryDto,
> {
  create(data: DeepPartial<E>): Promise<E>;
  createMany(data: DeepPartial<E>[]): Promise<E[]>;
  save(data: DeepPartial<E>): Promise<E>;
  saveMany(data: DeepPartial<E>[]): Promise<E[]>;
  findOneById(id: number): Promise<E>;
  findOne(options: FindOneOptions<E>): Promise<E>;
  findAll(
    take: number,
    skip: number,
    qb?: SelectQueryBuilder<E>,
  ): Promise<PaginateDto<E>>;
  delete(data: number): Promise<number>;
  deleteMany(data: number[]): Promise<number[]>;
  deleteSoft(data: number): Promise<number>;
  deleteSoftMany(data: number[]): Promise<number[]>;
  preload(entityLike: DeepPartial<E>): Promise<E>;
  findAllByDto(dto: QueryDto): Promise<PaginateDto<E>>;
}
