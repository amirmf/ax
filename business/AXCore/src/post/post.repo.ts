import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepo extends BaseRepo<Post> implements IBaseRepo<Post> {
  constructor(@InjectRepository(Post) private readonly repo: Repository<Post>) {
    super(repo);
  }
}
