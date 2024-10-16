import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsRepo } from './news.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './news.entity';
import { NewsMapper } from './news.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsRepo, NewsMapper, NewsService],
  exports: [NewsService],
})
export class NewsModule {}
