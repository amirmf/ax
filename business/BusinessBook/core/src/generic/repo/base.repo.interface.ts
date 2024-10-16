import { DeepPartial, FindOneOptions, SelectQueryBuilder } from 'typeorm';
import { PaginateDto } from '../dto/paginate.dto';
import { AbstractEntity } from '../entity/base.entity';

export interface IBaseRepo<E extends AbstractEntity> {
  create(data: DeepPartial<E>): Promise<E>;
  createMany(data: DeepPartial<E>[]): Promise<E[]>;
  save(data: DeepPartial<E>): Promise<E>;
  saveMany(data: DeepPartial<E>[]): Promise<E[]>;
  findOneById(id: string): Promise<E>;
  findOne(options: FindOneOptions<E>): Promise<E>;
  findAll(
    take: number,
    skip: number,
    qb?: SelectQueryBuilder<E>,
  ): Promise<PaginateDto<E>>;
  delete(data: number): Promise<void>;
  deleteMany(data: number[]): Promise<void>;
  deleteSoft(data: number): Promise<void>;
  deleteSoftMany(data: number[]): Promise<void>;
  preload(entityLike: DeepPartial<E>): Promise<E>;
  createQuery(): SelectQueryBuilder<E>;
}
