import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class LoginDto {
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
