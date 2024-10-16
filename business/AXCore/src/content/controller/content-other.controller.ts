import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { OtherContentService as OtherContentService } from '../service/content-other.service';
import { OtherContentMapper as OtherContentMapper } from '../mapper/content-other.mapper';
import { OtherContentOneDto } from '../dto/content-other.one.dto';
import { OtherContentQueryDto } from '../dto/content-other.query.dto';
import { OtherContent } from '../entity/content-other.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Content Other')
@ApiBearerAuth('accessToken')
@Controller('/content-other')
export class OtherContentController extends ControllerFactory<
  OtherContent,
  OtherContentOneDto,
  OtherContentQueryDto
>(OtherContentOneDto, OtherContentQueryDto) {
  constructor(
    protected CRUDService: OtherContentService,
    protected mapper: OtherContentMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
