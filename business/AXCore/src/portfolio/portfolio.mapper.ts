import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PortfolioOneDto } from './dto/portfolio.one.dto';
import { Portfolio } from './portfolio.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioMapper extends AbstractMapper<
  Portfolio,
  PortfolioOneDto
> {}
