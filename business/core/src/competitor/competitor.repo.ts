import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Competitor } from './competitor.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompetitorRepo
  extends BaseRepo<Competitor>
  implements IBaseRepo<Competitor>
{
  constructor(
    @InjectRepository(Competitor) private readonly repo: Repository<Competitor>,
  ) {
    super(repo);
  }
}
