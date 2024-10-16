import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { KeywordOneDto } from './dto/keyword.one.dto';
import { Keyword } from './keyword.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeywordMapper extends AbstractMapper<Keyword, KeywordOneDto> {}
