import {
  DeepPartial,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import { IBaseRepo } from './base.repo.interface';
import { AbstractEntity } from '../entity/base.entity';
import { PaginateDto } from '../dto/paginate.dto';

export abstract class BaseRepo<E extends AbstractEntity>
  implements IBaseRepo<E>
{
  constructor(private readonly baseRepo: Repository<E>) {}

  public async save(data: DeepPartial<E>): Promise<E> {
    // TODO: throw error if data not exists
    return await this.baseRepo.save(data);
  }

  public async saveMany(data: DeepPartial<E>[]): Promise<E[]> {
    // TODO: throw error if data not exists
    return await this.baseRepo.save(data);
  }

  public async create(data: DeepPartial<E>): Promise<E> {
    // TODO: throw error on duplicate data
    return await this.baseRepo.save(data);
  }

  public async createMany(data: DeepPartial<E>[]): Promise<E[]> {
    // TODO: throw error on duplicate data
    return await this.baseRepo.save(data);
  }

  public async findOneById(id: any): Promise<E> {
    const options: FindOptionsWhere<E> = {
      id: id,
    };
    return await this.baseRepo.findOneBy(options);
  }

  public async findOne(options: FindOneOptions<E>): Promise<E> {
    return this.baseRepo.findOne(options);
  }

  public async findAll(
    take = 20,
    skip = 0,
    qb?: SelectQueryBuilder<E>,
  ): Promise<PaginateDto<E>> {
    if (!qb) qb = this.createQuery();
    qb = qb.take(take).skip(skip);
    const findAndCountResult: [E[], number] = await qb.getManyAndCount();
    return {
      data: findAndCountResult[0],
      count: findAndCountResult[1],
    };
  }

  public async delete(id: number): Promise<void> {
    await this.baseRepo.delete(id);
  }

  public async deleteMany(ids: number[]): Promise<void> {
    await this.baseRepo.delete(ids);
  }

  public async deleteSoft(id: number): Promise<void> {
    await this.baseRepo.softDelete(id);
  }

  public async deleteSoftMany(ids: number[]): Promise<void> {
    await this.baseRepo.softDelete(ids);
  }

  public async preload(entityLike: DeepPartial<E>): Promise<E> {
    return await this.baseRepo.preload(entityLike);
  }

  public createQuery(): SelectQueryBuilder<E> {
    return this.baseRepo.createQueryBuilder();
  }
}
