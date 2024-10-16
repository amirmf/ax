import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Portfolio } from './portfolio.entity';
import { PortfolioRepo as PortfolioRepo } from './portfolio.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PortfolioService
  extends BaseCRUDService<Portfolio, PortfolioRepo, BaseQueryDto>
  implements IBaseCRUDService<Portfolio, BaseQueryDto>
{
  constructor(private readonly repo: PortfolioRepo) {
    super(repo);
  }
}
