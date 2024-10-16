import { Module } from '@nestjs/common';
import { LLMAppController } from './controller/llmapp.controller';
import { LLMAppService } from './service/llmapp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LLMAppRepo } from './repo/llmapp.repo';
import { LLMApp } from './entity/llmapp.entity';
import { LLMAppMapper } from './mapper/llmapp.mapper';
import { ExecutionService } from './service/execution.service';
import { ExecutionMapper } from './mapper/execution.mapper';
import { ExecutionRepo } from './repo/execution.repo';
import { ExecutionController } from './controller/execution.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LLMApp])],
  controllers: [
    LLMAppController,
    ExecutionController,
  ],
  providers: [
    LLMAppRepo, LLMAppMapper, LLMAppService,
    ExecutionRepo, ExecutionMapper, ExecutionService,
  ],
  exports: [
    LLMAppService,
    ExecutionService,
  ],
})
export class LLMAppModule {}
