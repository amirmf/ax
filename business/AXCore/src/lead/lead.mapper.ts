import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { LeadOneDto } from './dto/lead.one.dto';
import { Lead } from './lead.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadMapper extends AbstractMapper<Lead, LeadOneDto> {}
