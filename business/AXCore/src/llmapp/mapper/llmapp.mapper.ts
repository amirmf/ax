import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { LLMAppOneDto } from '../dto/llmapp.one.dto';
import { LLMApp } from '../entity/llmapp.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LLMAppMapper extends AbstractMapper<LLMApp, LLMAppOneDto> {}
