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
import { ExecutionService } from '../service/execution.service';
import { ExecutionMapper } from '../mapper/execution.mapper';
import { ExecutionOneDto } from '../dto/execution.one.dto';
import { Execution } from '../entity/execution.entity';

@ApiTags('Execution')
@ApiBearerAuth('accessToken')
@Controller('/execution')
export class ExecutionController extends ControllerFactory<
  Execution,
  ExecutionOneDto,
  BaseQueryDto
>(ExecutionOneDto, BaseQueryDto) {
  constructor(
    protected CRUDService: ExecutionService,
    protected mapper: ExecutionMapper,
  ) {
    super(CRUDService, mapper);
  }

}
