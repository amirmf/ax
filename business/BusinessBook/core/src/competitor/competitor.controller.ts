import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Competitor } from './competitor.entity';
import { CompetitorService as CompetitorService } from './competitor.service';
import { CompetitorQueryDto } from './dto/competitor.query.dto';
import { CompetitorMapper as CompetitorMapper } from './competitor.mapper';
import { CompetitorOneDto } from './dto/competitor.one.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Competitor')
@ApiBearerAuth('accessToken')
@Controller('/competitor')
export class CompetitorController extends ControllerFactory<
  Competitor,
  CompetitorOneDto,
  CompetitorQueryDto
>(CompetitorOneDto, CompetitorQueryDto) {
  constructor(
    protected CRUDService: CompetitorService,
    protected mapper: CompetitorMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
