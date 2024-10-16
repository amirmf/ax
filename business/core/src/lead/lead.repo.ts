import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Lead } from './lead.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadRepo extends BaseRepo<Lead> implements IBaseRepo<Lead> {
  constructor(@InjectRepository(Lead) private readonly repo: Repository<Lead>) {
    super(repo);
  }
}
