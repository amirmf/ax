import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  rememberMe: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  tenantId: string;
}
