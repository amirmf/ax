import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './news.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsRepo extends BaseRepo<News> implements IBaseRepo<News> {
  constructor(@InjectRepository(News) private readonly repo: Repository<News>) {
    super(repo);
  }
}
