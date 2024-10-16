import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Keyword } from './keyword.entity';
import { KeywordService as KeywordService } from './keyword.service';
import { KeywordOneDto } from './dto/keyword.one.dto';
import { KeywordQueryDto } from './dto/keyword.query.dto';
import { KeywordMapper as KeywordMapper } from './keyword.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Keyword')
@ApiBearerAuth('accessToken')
@Controller('/keyword')
export class KeywordController extends ControllerFactory<
  Keyword,
  KeywordOneDto,
  KeywordQueryDto
>(KeywordOneDto, KeywordQueryDto) {
  constructor(
    protected CRUDService: KeywordService,
    protected mapper: KeywordMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
