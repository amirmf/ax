import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { AudienceOneDto } from './dto/audience.one.dto';
import { Audience } from './audience.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AudienceMapper extends AbstractMapper<Audience, AudienceOneDto> {}
