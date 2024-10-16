import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { PartyIdentifierRepo } from '../repo/party-identifier.repo';
import { PartyIdentifier } from '../entity/party-identifier.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PartyIdentifierService
  extends BaseCRUDService<PartyIdentifier, PartyIdentifierRepo, BaseQueryDto>
  implements IBaseCRUDService<PartyIdentifier, BaseQueryDto>
{
  constructor(private readonly repo: PartyIdentifierRepo) {
    super(repo);
  }
}
