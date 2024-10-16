import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { OtherContent } from '../entity/content-other.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherContentRepo
  extends BaseRepo<OtherContent>
  implements IBaseRepo<OtherContent>
{
  constructor(
    @InjectRepository(OtherContent)
    private readonly repo: Repository<OtherContent>,
  ) {
    super(repo);
  }
}
