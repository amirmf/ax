import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { BusinessOneDto } from 'src/business/dto/business.one.dto';
import { ContentOneDto } from 'src/content/dto/content.one.dto';
import { BaseOneDto } from 'src/generic/dto/base.one.dto';

export class MediaOneDto extends BaseOneDto {
  @IsString()
  title: string;

  @IsString()
  @Optional()
  summary: string;

  @IsNumber()
  @Optional()
  seqNum: number;

  @Type(() => ContentOneDto)
  @ValidateNested()
  @Optional()
  content: ContentOneDto;

  @Type(() => BusinessOneDto)
  @ValidateNested()
  @Optional()
  business: BusinessOneDto;
}
