import { instanceToPlain, plainToInstance } from 'class-transformer';
import { BaseOneDto } from '../dto/base.one.dto';
import { AbstractEntity } from '../entity/base.entity';
import { IMapper } from './base.mapper.interface';

export abstract class AbstractMapper<
  E extends AbstractEntity,
  D extends BaseOneDto,
> implements IMapper<E, D>
{
  constructor(
    private readonly oneDtoResourceType: new (...args) => D,
    private readonly entityResourceType: new (...args) => E,
  ) {}

  toEntity(obj: D): E {
    const objPlain = instanceToPlain(obj);
    const res: E = plainToInstance(this.entityResourceType, objPlain, {
      excludeExtraneousValues: true,
    });
    return res;
  }

  toEntityMany(data: D[]): E[] {
    return data.map((item) => this.toEntity(item));
  }

  toDto(obj: E): D {
    const objPlain = instanceToPlain(obj);
    const res: D = plainToInstance(this.oneDtoResourceType, objPlain, {
      excludeExtraneousValues: true,
    });
    return res;
  }

  toDtoMany(data: E[]): D[] {
    return data.map((item) => this.toDto(item));
  }
}
