import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { LLMApp } from '../entity/llmapp.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LLMAppRepo extends BaseRepo<LLMApp> implements IBaseRepo<LLMApp> {
  constructor(
    @InjectRepository(LLMApp) private readonly repo: Repository<LLMApp>,
  ) {
    super(repo);
  }
}
