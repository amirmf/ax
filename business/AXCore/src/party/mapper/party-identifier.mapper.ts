import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PartyIdentifierOneDto } from '../dto/party-identifier.one.dto';
import { PartyIdentifier } from '../entity/party-identifier.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyIdentifierMapper extends AbstractMapper<
  PartyIdentifier,
  PartyIdentifierOneDto
> {}
