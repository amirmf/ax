import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { BaseOneDto } from 'src/generic/dto/base.one.dto';
import { MediaOneDto } from 'src/media/dto/media.one.dto';
import { ContentCategoryOneDto } from './content-category.one.dto';
import { KeywordOneDto } from 'src/keyword/dto/keyword.one.dto';

export class ContentOneDto extends BaseOneDto {
  @IsString()
  title: string;

  @IsString()
  @Optional()
  summary: string;

  @IsString()
  @Optional()
  txt: string;

  @IsNumber()
  @Optional()
  seqNum: number;

  @Type(() => MediaOneDto)
  @ValidateNested()
  @Optional()
  poster: MediaOneDto;

  @Type(() => MediaOneDto)
  @ValidateNested()
  @Optional()
  medias: MediaOneDto[];

  @Type(() => KeywordOneDto)
  @ValidateNested()
  @Optional()
  keywords: KeywordOneDto[];

  @Type(() => ContentCategoryOneDto)
  @ValidateNested()
  @Optional()
  categories: ContentCategoryOneDto[];
}
