import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { PartyIdentifierOneDto } from '../dto/party-identifier.one.dto';
import { PartyIdentifierQueryDto } from '../dto/party-identifier.query.dto';
import { PartyIdentifierMapper } from '../mapper/party-identifier.mapper';
import { PartyIdentifierService } from '../service/party-identifier.service';
import { PartyIdentifier } from '../entity/party-identifier.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Party Identifier')
@ApiBearerAuth('accessToken')
@Controller('/party-identifier')
export class PartyIdentifierController extends ControllerFactory<
  PartyIdentifier,
  PartyIdentifierOneDto,
  PartyIdentifierQueryDto
>(PartyIdentifierOneDto, PartyIdentifierQueryDto) {
  constructor(
    protected CRUDService: PartyIdentifierService,
    protected mapper: PartyIdentifierMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
