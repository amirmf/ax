import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { LLMApp } from '../entity/llmapp.entity';
import { Injectable } from '@nestjs/common';
import { Execution } from '../entity/execution.entity';

@Injectable()
export class ExecutionRepo extends BaseRepo<Execution> implements IBaseRepo<Execution> {
  constructor(
    @InjectRepository(Execution) private readonly repo: Repository<Execution>,
  ) {
    super(repo);
  }
}
