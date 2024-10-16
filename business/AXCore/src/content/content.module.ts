import { Module } from '@nestjs/common';
import { OtherContentController } from './controller/content-other.controller';
import { OtherContentService } from './service/content-other.service';
import { ContentCategoryService } from './service/content-category.service';
import { ContentCategoryController } from './controller/content-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherContentRepo } from './repo/content-other.repo';
import { ContentCategoryRepo } from './repo/content-category.repo';
import { OtherContent } from './entity/content-other.entity';
import { ContentCategory } from './entity/content-category.entity';
import { Content } from './entity/content.entity';
import { ContentCategoryMapper } from './mapper/content-category.mapper';
import { OtherContentMapper } from './mapper/content-other.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Content, OtherContent, ContentCategory])],
  controllers: [OtherContentController, ContentCategoryController],
  providers: [
    ContentCategoryMapper,
    OtherContentMapper,

    OtherContentRepo,
    ContentCategoryRepo,

    OtherContentService,
    ContentCategoryService,
  ],
  exports: [OtherContentService, ContentCategoryService],
})
export class ContentModule {}
