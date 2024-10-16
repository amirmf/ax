import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaRepo } from './media.repo';
import { Media } from './media.entity';
import { MediaMapper } from './media.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaRepo, MediaMapper, MediaService],
  exports: [MediaService],
})
export class MediaModule {}
