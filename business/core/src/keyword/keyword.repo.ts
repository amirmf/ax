import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from './keyword.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeywordRepo
  extends BaseRepo<Keyword>
  implements IBaseRepo<Keyword>
{
  constructor(
    @InjectRepository(Keyword) private readonly repo: Repository<Keyword>,
  ) {
    super(repo);
  }
}
