import { BaseOneDto } from '../dto/base.one.dto';
import { AbstractEntity } from '../entity/base.entity';

export interface IMapper<E extends AbstractEntity, D extends BaseOneDto> {
  toDtoMany(data: E[]): D[];
  toEntity(obj: D): E;
  toDto(obj: E): D;
}
