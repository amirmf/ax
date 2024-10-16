import { Module } from '@nestjs/common';
import { KeywordController } from './keyword.controller';
import { KeywordService } from './keyword.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordRepo } from './keyword.repo';
import { Keyword } from './keyword.entity';
import { KeywordMapper } from './keyword.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  controllers: [KeywordController],
  providers: [KeywordRepo, KeywordMapper, KeywordService],
  exports: [KeywordService],
})
export class KeywordModule {}
