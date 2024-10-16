import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BusinessOneDto } from 'src/business/dto/business.one.dto';
import { ContentOneDto } from 'src/content/dto/content.one.dto';
import { LeadOneDto } from 'src/lead/dto/lead.one.dto';

export class AboutOneDto extends ContentOneDto {
  @Type(() => BusinessOneDto)
  @ValidateNested()
  @Optional()
  business: BusinessOneDto;

  @Type(() => LeadOneDto)
  @ValidateNested()
  @Optional()
  lead: LeadOneDto;
}
