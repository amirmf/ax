import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { PartyStandardClassRepo } from '../repo/party-standard-class.repo';
import { PartyStandardClass } from '../entity/party-standard-class.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PartyStandardClassService
  extends BaseCRUDService<
    PartyStandardClass,
    PartyStandardClassRepo,
    BaseQueryDto
  >
  implements IBaseCRUDService<PartyStandardClass, BaseQueryDto>
{
  constructor(private readonly repo: PartyStandardClassRepo) {
    super(repo);
  }
}
