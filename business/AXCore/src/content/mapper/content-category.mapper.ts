import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { ContentCategoryOneDto } from '../dto/content-category.one.dto';
import { ContentCategory } from '../entity/content-category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentCategoryMapper extends AbstractMapper<
  ContentCategory,
  ContentCategoryOneDto
> {}
