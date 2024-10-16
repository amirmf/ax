import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Portfolio } from './portfolio.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioRepo
  extends BaseRepo<Portfolio>
  implements IBaseRepo<Portfolio>
{
  constructor(
    @InjectRepository(Portfolio) private readonly repo: Repository<Portfolio>,
  ) {
    super(repo);
  }
}
