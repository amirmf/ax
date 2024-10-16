import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PartyProductClass } from '../entity/party-product-class.entity';
import { PartyProductClassOneDto } from '../dto/party-product-class.one.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyProductClassMapper extends AbstractMapper<
  PartyProductClass,
  PartyProductClassOneDto
> {}
