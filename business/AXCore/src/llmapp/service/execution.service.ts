import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { LLMApp } from '../entity/llmapp.entity';
import { LLMAppRepo as LLMAppRepo } from '../repo/llmapp.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';
import { ExecutionRepo } from '../repo/execution.repo';
import { Execution } from '../entity/execution.entity';

@Injectable()
export class ExecutionService
  extends BaseCRUDService<Execution, ExecutionRepo, BaseQueryDto>
  implements IBaseCRUDService<Execution, BaseQueryDto>
{
  constructor(private readonly repo: ExecutionRepo) {
    super(repo);
  }
}
