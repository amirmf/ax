import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { AboutOneDto } from './dto/about.one.dto';
import { About } from './about.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutMapper extends AbstractMapper<About, AboutOneDto> {}
