import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Post } from './post.entity';
import { PostService as PostService } from './post.service';
import { PostOneDto } from './dto/post.one.dto';
import { PostQueryDto } from './dto/post.query.dto';
import { PostMapper as PostMapper } from './post.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Post')
@ApiBearerAuth('accessToken')
@Controller('/post')
export class PostController extends ControllerFactory<
  Post,
  PostOneDto,
  PostQueryDto
>(PostOneDto, PostQueryDto) {
  constructor(
    protected CRUDService: PostService,
    protected mapper: PostMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
