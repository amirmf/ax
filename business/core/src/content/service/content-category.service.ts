import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { ContentCategory } from '../entity/content-category.entity';
import { ContentCategoryRepo } from '../repo/content-category.repo';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class ContentCategoryService
  extends BaseCRUDService<ContentCategory, ContentCategoryRepo, BaseQueryDto>
  implements IBaseCRUDService<ContentCategory, BaseQueryDto>
{
  constructor(private readonly repo: ContentCategoryRepo) {
    super(repo);
  }
}
