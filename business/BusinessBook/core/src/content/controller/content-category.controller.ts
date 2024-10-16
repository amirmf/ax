import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { ContentCategoryOneDto } from '../dto/content-category.one.dto';
import { ContentCategoryQueryDto } from '../dto/content-category.query.dto';
import { ContentCategory } from '../entity/content-category.entity';
import { ContentCategoryMapper } from '../mapper/content-category.mapper';
import { ContentCategoryService } from '../service/content-category.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Content Category')
@ApiBearerAuth('accessToken')
@Controller('/content-category')
export class ContentCategoryController extends ControllerFactory<
  ContentCategory,
  ContentCategoryOneDto,
  ContentCategoryQueryDto
>(ContentCategoryOneDto, ContentCategoryQueryDto) {
  constructor(
    protected CRUDService: ContentCategoryService,
    protected mapper: ContentCategoryMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
