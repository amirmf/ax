import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentCategory } from '../entity/content-category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentCategoryRepo
  extends BaseRepo<ContentCategory>
  implements IBaseRepo<ContentCategory>
{
  constructor(
    @InjectRepository(ContentCategory)
    private readonly repo: Repository<ContentCategory>,
  ) {
    super(repo);
  }
}
