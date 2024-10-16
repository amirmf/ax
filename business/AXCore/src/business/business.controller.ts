import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Business } from './business.entity';
import { BusinessService } from './business.service';
import { BusinessOneDto } from './dto/business.one.dto';
import { BusinessQueryDto } from './dto/business.query.dto';
import { BusinessMapper } from './business.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Business')
@ApiBearerAuth('accessToken')
@Controller('/business')
export class BusinessController extends ControllerFactory<
  Business,
  BusinessOneDto,
  BusinessQueryDto
>(BusinessOneDto, BusinessQueryDto) {
  constructor(
    protected CRUDService: BusinessService,
    protected mapper: BusinessMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
