import { Module } from '@nestjs/common';
import { CompetitorController } from './competitor.controller';
import { CompetitorService } from './competitor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitorRepo } from './competitor.repo';
import { Competitor } from './competitor.entity';
import { CompetitorMapper } from './competitor.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Competitor])],
  controllers: [CompetitorController],
  providers: [CompetitorRepo, CompetitorMapper, CompetitorService],
  exports: [CompetitorService],
})
export class CompetitorModule {}
