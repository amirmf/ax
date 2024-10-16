import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PartyMediaOneDto } from '../dto/party-media.one.dto';
import { PartyMedia } from '../entity/party-media.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyMediaMapper extends AbstractMapper<
  PartyMedia,
  PartyMediaOneDto
> {}
