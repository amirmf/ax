import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Competitor } from './competitor.entity';
import { CompetitorRepo as CompetitorRepo } from './competitor.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class CompetitorService
  extends BaseCRUDService<Competitor, CompetitorRepo, BaseQueryDto>
  implements IBaseCRUDService<Competitor, BaseQueryDto>
{
  constructor(private readonly repo: CompetitorRepo) {
    super(repo);
  }
}
