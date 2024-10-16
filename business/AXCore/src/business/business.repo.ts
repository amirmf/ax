import { BaseRepo } from 'src/generic/repo/base.repo';
import { Business } from './business.entity';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessRepo
  extends BaseRepo<Business>
  implements IBaseRepo<Business>
{
  constructor(
    @InjectRepository(Business) private readonly repo: Repository<Business>,
  ) {
    super(repo);
  }
}
