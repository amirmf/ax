import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { PartyContactRepo } from '../repo/party-contact.repo';
import { PartyContact } from '../entity/party-contact.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PartyContactService
  extends BaseCRUDService<PartyContact, PartyContactRepo, BaseQueryDto>
  implements IBaseCRUDService<PartyContact, BaseQueryDto>
{
  constructor(private readonly repo: PartyContactRepo) {
    super(repo);
  }
}
