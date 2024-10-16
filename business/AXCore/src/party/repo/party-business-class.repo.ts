import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyBusinessClass } from '../entity/party-business-class.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyBusinessClassRepo
  extends BaseRepo<PartyBusinessClass>
  implements IBaseRepo<PartyBusinessClass>
{
  constructor(
    @InjectRepository(PartyBusinessClass)
    private readonly repo: Repository<PartyBusinessClass>,
  ) {
    super(repo);
  }
}
