import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Portfolio } from './portfolio.entity';
import { PortfolioService as PortfolioService } from './portfolio.service';
import { PortfolioOneDto } from './dto/portfolio.one.dto';
import { PortfolioQueryDto } from './dto/portfolio.query.dto';
import { PortfolioMapper as PortfolioMapper } from './portfolio.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Portfolio')
@ApiBearerAuth('accessToken')
@Controller('/portfolio')
export class PortfolioController extends ControllerFactory<
  Portfolio,
  PortfolioOneDto,
  PortfolioQueryDto
>(PortfolioOneDto, PortfolioQueryDto) {
  constructor(
    protected CRUDService: PortfolioService,
    protected mapper: PortfolioMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
