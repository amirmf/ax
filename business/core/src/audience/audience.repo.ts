import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Audience } from './audience.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AudienceRepo
  extends BaseRepo<Audience>
  implements IBaseRepo<Audience>
{
  constructor(
    @InjectRepository(Audience) private readonly repo: Repository<Audience>,
  ) {
    super(repo);
  }
}
