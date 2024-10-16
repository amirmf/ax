import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';
import { BaseOneDto } from 'src/generic/dto/base.one.dto';

export class LLMAppResponseDto extends BaseOneDto {
  
  @IsNumber()
  @Optional()
  id: number;
  
}
