import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { PartyStandardClassOneDto } from '../dto/party-standard-class.one.dto';
import { PartyStandardClassQueryDto } from '../dto/party-standard-class.query.dto';
import { PartyStandardClassMapper } from '../mapper/party-standard-class.mapper';
import { PartyStandardClassService } from '../service/party-standard-class.service';
import { PartyStandardClass } from '../entity/party-standard-class.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Party Standard Class')
@ApiBearerAuth('accessToken')
@Controller('/party-standard-class')
export class PartyStandardClassController extends ControllerFactory<
  PartyStandardClass,
  PartyStandardClassOneDto,
  PartyStandardClassQueryDto
>(PartyStandardClassOneDto, PartyStandardClassQueryDto) {
  constructor(
    protected CRUDService: PartyStandardClassService,
    protected mapper: PartyStandardClassMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
