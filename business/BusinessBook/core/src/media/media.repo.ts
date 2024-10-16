import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from './media.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaRepo extends BaseRepo<Media> implements IBaseRepo<Media> {
  constructor(
    @InjectRepository(Media) private readonly repo: Repository<Media>,
  ) {
    super(repo);
  }
}
