import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyProductClass } from '../entity/party-product-class.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyProductClassRepo
  extends BaseRepo<PartyProductClass>
  implements IBaseRepo<PartyProductClass>
{
  constructor(
    @InjectRepository(PartyProductClass)
    private readonly repo: Repository<PartyProductClass>,
  ) {
    super(repo);
  }
}
