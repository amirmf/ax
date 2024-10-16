import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class BaseOneDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  tenantId?: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Exclude()
  version?: number;
}
