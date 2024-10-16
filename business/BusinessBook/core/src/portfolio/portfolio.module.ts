import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioRepo } from './portfolio.repo';
import { Portfolio } from './portfolio.entity';
import { PortfolioMapper } from './portfolio.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio])],
  controllers: [PortfolioController],
  providers: [PortfolioRepo, PortfolioMapper, PortfolioService],
  exports: [PortfolioService],
})
export class PortfolioModule {}
