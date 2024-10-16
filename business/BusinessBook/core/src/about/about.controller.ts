import { Controller } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { About } from './about.entity';
import { AboutService as AboutService } from './about.service';
import { AboutOneDto } from './dto/about.one.dto';
import { AboutMapper as AboutMapper } from './about.mapper';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';
import {
  ArgumentMetadata,
  Body,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
  Type,
  UsePipes,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { IsNumber } from 'class-validator';

@ApiTags('About')
@ApiBearerAuth('accessToken')
@Controller('/about')
export class AboutController extends ControllerFactory<
  About,
  AboutOneDto,
  BaseQueryDto
>(AboutOneDto, BaseQueryDto) {
  constructor(
    protected CRUDService: AboutService,
    protected mapper: AboutMapper,
  ) {
    super(CRUDService, mapper);
  }

}
