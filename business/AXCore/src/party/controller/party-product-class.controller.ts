import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { PartyProductClassService } from '../service/party-product-class.service';
import { PartyProductClassMapper } from '../mapper/party-product-class.mapper';
import { PartyProductClassOneDto } from '../dto/party-product-class.one.dto';
import { PartyProductClassQueryDto } from '../dto/party-product-class.query.dto';
import { PartyProductClass } from '../entity/party-product-class.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Party Product Class')
@ApiBearerAuth('accessToken')
@Controller('/party-product-class')
export class PartyProductClassController extends ControllerFactory<
  PartyProductClass,
  PartyProductClassOneDto,
  PartyProductClassQueryDto
>(PartyProductClassOneDto, PartyProductClassQueryDto) {
  constructor(
    protected CRUDService: PartyProductClassService,
    protected mapper: PartyProductClassMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
