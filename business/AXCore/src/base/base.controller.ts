import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseOneDto } from 'src/generic/dto/base.one.dto';

/**
 * fake api for making swagger to create type of BaseOneDto
 */
@ApiTags('Base')
@ApiBearerAuth('accessToken')
@Controller('/base')
export class BaseController {
  @Get('/baseOneDto')
  baseOneDto(): BaseOneDto {
    return undefined;
  }
}
