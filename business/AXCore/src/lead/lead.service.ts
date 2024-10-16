import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Lead } from './lead.entity';
import { LeadRepo as LeadRepo } from './lead.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class LeadService
  extends BaseCRUDService<Lead, LeadRepo, BaseQueryDto>
  implements IBaseCRUDService<Lead, BaseQueryDto>
{
  constructor(private readonly repo: LeadRepo) {
    super(repo);
  }
}
