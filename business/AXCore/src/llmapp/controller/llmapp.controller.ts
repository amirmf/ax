import { Controller } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { LLMApp } from '../entity/llmapp.entity';
import { LLMAppService as LLMAppService } from '../service/llmapp.service';
import { LLMAppOneDto } from '../dto/llmapp.one.dto';
import { LLMAppMapper as LLMAppMapper } from '../mapper/llmapp.mapper';
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

@ApiTags('LLMApp')
@ApiBearerAuth('accessToken')
@Controller('/llmapp')
export class LLMAppController extends ControllerFactory<
  LLMApp,
  LLMAppOneDto,
  BaseQueryDto
>(LLMAppOneDto, BaseQueryDto) {
  constructor(
    protected CRUDService: LLMAppService,
    protected mapper: LLMAppMapper,
  ) {
    super(CRUDService, mapper);
  }

}
