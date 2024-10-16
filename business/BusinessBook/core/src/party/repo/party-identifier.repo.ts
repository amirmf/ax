import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyIdentifier } from '../entity/party-identifier.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyIdentifierRepo
  extends BaseRepo<PartyIdentifier>
  implements IBaseRepo<PartyIdentifier>
{
  constructor(
    @InjectRepository(PartyIdentifier)
    private readonly repo: Repository<PartyIdentifier>,
  ) {
    super(repo);
  }
}
