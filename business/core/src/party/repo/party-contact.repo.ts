import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyContact } from '../entity/party-contact.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyContactRepo
  extends BaseRepo<PartyContact>
  implements IBaseRepo<PartyContact>
{
  constructor(
    @InjectRepository(PartyContact)
    private readonly repo: Repository<PartyContact>,
  ) {
    super(repo);
  }
}
