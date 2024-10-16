import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PartyContactOneDto } from '../dto/party-contact.one.dto';
import { PartyContact } from '../entity/party-contact.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyContactMapper extends AbstractMapper<
  PartyContact,
  PartyContactOneDto
> {}
