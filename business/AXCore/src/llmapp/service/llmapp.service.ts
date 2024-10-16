import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { LLMApp } from '../entity/llmapp.entity';
import { LLMAppRepo as LLMAppRepo } from '../repo/llmapp.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';
import { DeepPartial } from 'typeorm';

@Injectable()
export class LLMAppService
  extends BaseCRUDService<LLMApp, LLMAppRepo, BaseQueryDto>
  implements IBaseCRUDService<LLMApp, BaseQueryDto>
{
  constructor(private readonly repo: LLMAppRepo) {
    super(repo);
  }

  public create(data: DeepPartial<LLMApp>): Promise<LLMApp> {
      // TODO: connect to provider and add there too
      return null;
  }
}
