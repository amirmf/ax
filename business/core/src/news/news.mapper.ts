import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { NewsOneDto } from './dto/news.one.dto';
import { News } from './news.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsMapper extends AbstractMapper<News, NewsOneDto> {}
