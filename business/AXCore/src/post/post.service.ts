import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Post } from './post.entity';
import { PostRepo as PostRepo } from './post.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PostService
  extends BaseCRUDService<Post, PostRepo, BaseQueryDto>
  implements IBaseCRUDService<Post, BaseQueryDto>
{
  constructor(private readonly repo: PostRepo) {
    super(repo);
  }
}
