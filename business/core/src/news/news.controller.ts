import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { News } from './news.entity';
import { NewsService as NewsService } from './news.service';
import { NewsOneDto } from './dto/news.one.dto';
import { NewsQueryDto } from './dto/news.query.dto';
import { NewsMapper as NewsMapper } from './news.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('News')
@ApiBearerAuth('accessToken')
@Controller('/news')
export class NewsController extends ControllerFactory<
  News,
  NewsOneDto,
  NewsQueryDto
>(NewsOneDto, NewsQueryDto) {
  constructor(
    protected CRUDService: NewsService,
    protected mapper: NewsMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
