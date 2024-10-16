import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyMedia } from '../entity/party-media.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyMediaRepo
  extends BaseRepo<PartyMedia>
  implements IBaseRepo<PartyMedia>
{
  constructor(
    @InjectRepository(PartyMedia)
    private readonly repo: Repository<PartyMedia>,
  ) {
    super(repo);
  }
}
