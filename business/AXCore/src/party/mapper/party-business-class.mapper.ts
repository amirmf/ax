import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PartyBusinessClass } from '../entity/party-business-class.entity';
import { PartyBusinessClassOneDto } from '../dto/party-business-class.one.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyBusinessClassMapper extends AbstractMapper<
  PartyBusinessClass,
  PartyBusinessClassOneDto
> {}
