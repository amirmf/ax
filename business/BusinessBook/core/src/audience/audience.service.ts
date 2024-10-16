import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Audience } from './audience.entity';
import { AudienceRepo as AudienceRepo } from './audience.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class AudienceService
  extends BaseCRUDService<Audience, AudienceRepo, BaseQueryDto>
  implements IBaseCRUDService<Audience, BaseQueryDto>
{
  constructor(private readonly repo: AudienceRepo) {
    super(repo);
  }
}
