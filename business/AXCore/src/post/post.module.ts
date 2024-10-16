import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepo } from './post.repo';
import { Post } from './post.entity';
import { PostMapper } from './post.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostRepo, PostMapper, PostService],
  exports: [PostService],
})
export class PostModule {}
