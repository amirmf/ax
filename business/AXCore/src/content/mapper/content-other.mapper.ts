import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { OtherContent } from '../entity/content-other.entity';
import { OtherContentOneDto } from '../dto/content-other.one.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherContentMapper extends AbstractMapper<
  OtherContent,
  OtherContentOneDto
> {}
