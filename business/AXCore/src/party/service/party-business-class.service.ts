import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { PartyBusinessClassRepo } from '../repo/party-business-class.repo';
import { PartyBusinessClass } from '../entity/party-business-class.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PartyBusinessClassService
  extends BaseCRUDService<
    PartyBusinessClass,
    PartyBusinessClassRepo,
    BaseQueryDto
  >
  implements IBaseCRUDService<PartyBusinessClass, BaseQueryDto>
{
  constructor(private readonly repo: PartyBusinessClassRepo) {
    super(repo);
  }
}
