import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { PartyBusinessClassMapper } from '../mapper/party-business-class.mapper';
import { PartyBusinessClassService } from '../service/party-business-class.service';
import { PartyBusinessClassOneDto } from '../dto/party-business-class.one.dto';
import { PartyBusinessClass } from '../entity/party-business-class.entity';
import { PartyBusinessClassQueryDto } from '../dto/party-business-class.query.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Party Business Class')
@ApiBearerAuth('accessToken')
@Controller('/party-business-class')
export class PartyBusinessClassController extends ControllerFactory<
  PartyBusinessClass,
  PartyBusinessClassOneDto,
  PartyBusinessClassQueryDto
>(PartyBusinessClassOneDto, PartyBusinessClassQueryDto) {
  constructor(
    protected CRUDService: PartyBusinessClassService,
    protected mapper: PartyBusinessClassMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
