import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';
import { ContentOneDto } from 'src/content/dto/content.one.dto';

export class ResponseDto extends ContentOneDto {
  @IsString()
  @Optional()
  input: string;

  @IsString()
  @Optional()
  lead: string;

  @IsNumber()
  @Optional()
  id: number;
}
