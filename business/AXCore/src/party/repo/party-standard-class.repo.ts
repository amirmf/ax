import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyStandardClass } from '../entity/party-standard-class.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyStandardClassRepo
  extends BaseRepo<PartyStandardClass>
  implements IBaseRepo<PartyStandardClass>
{
  constructor(
    @InjectRepository(PartyStandardClass)
    private readonly repo: Repository<PartyStandardClass>,
  ) {
    super(repo);
  }
}
