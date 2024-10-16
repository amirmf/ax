import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Lead } from './lead.entity';
import { LeadService as LeadService } from './lead.service';
import { LeadOneDto } from './dto/lead.one.dto';
import { LeadQueryDto } from './dto/lead.query.dto';
import { LeadMapper as LeadMapper } from './lead.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Lead')
@ApiBearerAuth('accessToken')
@Controller('/lead')
export class LeadController extends ControllerFactory<
  Lead,
  LeadOneDto,
  LeadQueryDto
>(LeadOneDto, LeadQueryDto) {
  constructor(
    protected CRUDService: LeadService,
    protected mapper: LeadMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
