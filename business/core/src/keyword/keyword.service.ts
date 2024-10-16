import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Keyword } from './keyword.entity';
import { KeywordRepo as KeywordRepo } from './keyword.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class KeywordService
  extends BaseCRUDService<Keyword, KeywordRepo, BaseQueryDto>
  implements IBaseCRUDService<Keyword, BaseQueryDto>
{
  constructor(private readonly repo: KeywordRepo) {
    super(repo);
  }
}
