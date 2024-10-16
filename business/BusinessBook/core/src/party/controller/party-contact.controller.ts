import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { PartyContactOneDto } from '../dto/party-contact.one.dto';
import { PartyContactQueryDto } from '../dto/party-contact.query.dto';
import { PartyContactMapper } from '../mapper/party-contact.mapper';
import { PartyContactService } from '../service/party-contact.service';
import { PartyContact } from '../entity/party-contact.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Party Contact')
@ApiBearerAuth('accessToken')
@Controller('/party-contact')
export class PartyContactController extends ControllerFactory<
  PartyContact,
  PartyContactOneDto,
  PartyContactQueryDto
>(PartyContactOneDto, PartyContactQueryDto) {
  constructor(
    protected CRUDService: PartyContactService,
    protected mapper: PartyContactMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
