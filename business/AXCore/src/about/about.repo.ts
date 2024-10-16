import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './about.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutRepo extends BaseRepo<About> implements IBaseRepo<About> {
  constructor(
    @InjectRepository(About) private readonly repo: Repository<About>,
  ) {
    super(repo);
  }
}
