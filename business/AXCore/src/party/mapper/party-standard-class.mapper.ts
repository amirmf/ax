import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PartyStandardClassOneDto } from '../dto/party-standard-class.one.dto';
import { PartyStandardClass } from '../entity/party-standard-class.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyStandardClassMapper extends AbstractMapper<
  PartyStandardClass,
  PartyStandardClassOneDto
> {}
