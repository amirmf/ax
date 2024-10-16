import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Audience } from './audience.entity';
import { AudienceService as AudienceService } from './audience.service';
import { AudienceOneDto } from './dto/audience.one.dto';
import { AudienceQueryDto } from './dto/audience.query.dto';
import { AudienceMapper as AudienceMapper } from './audience.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Audience')
@ApiBearerAuth('accessToken')
@Controller('/audience')
export class AudienceController extends ControllerFactory<
  Audience,
  AudienceOneDto,
  AudienceQueryDto
>(AudienceOneDto, AudienceQueryDto) {
  constructor(
    protected CRUDService: AudienceService,
    protected mapper: AudienceMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
