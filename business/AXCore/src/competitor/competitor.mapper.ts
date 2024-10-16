import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { Competitor } from './competitor.entity';
import { CompetitorOneDto } from './dto/competitor.one.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompetitorMapper extends AbstractMapper<
  Competitor,
  CompetitorOneDto
> {}
