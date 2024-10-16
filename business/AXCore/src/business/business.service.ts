import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Business } from './business.entity';
import { BusinessRepo } from './business.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class BusinessService
  extends BaseCRUDService<Business, BusinessRepo, BaseQueryDto>
  implements IBaseCRUDService<Business, BaseQueryDto>
{
  constructor(private readonly repo: BusinessRepo) {
    super(repo);
  }
}
