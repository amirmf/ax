import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { MediaOneDto } from './dto/media.one.dto';
import { Media } from './media.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaMapper extends AbstractMapper<Media, MediaOneDto> {}
