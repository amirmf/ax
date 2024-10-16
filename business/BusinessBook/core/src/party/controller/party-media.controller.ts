import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { PartyMediaOneDto } from '../dto/party-media.one.dto';
import { PartyMediaQueryDto } from '../dto/party-media.query.dto';
import { PartyMediaMapper } from '../mapper/party-media.mapper';
import { PartyMediaService } from '../service/party-media.service';
import { PartyMedia } from '../entity/party-media.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Party Media')
@ApiBearerAuth('accessToken')
@Controller('/party-media')
export class PartyMediaController extends ControllerFactory<
  PartyMedia,
  PartyMediaOneDto,
  PartyMediaQueryDto
>(PartyMediaOneDto, PartyMediaQueryDto) {
  constructor(
    protected CRUDService: PartyMediaService,
    protected mapper: PartyMediaMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
