import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { News } from './news.entity';
import { NewsRepo as NewsRepo } from './news.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class NewsService
  extends BaseCRUDService<News, NewsRepo, BaseQueryDto>
  implements IBaseCRUDService<News, BaseQueryDto>
{
  constructor(private readonly repo: NewsRepo) {
    super(repo);
  }
}
