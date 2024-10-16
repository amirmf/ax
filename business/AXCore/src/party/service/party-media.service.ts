import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { PartyMediaRepo } from '../repo/party-media.repo';
import { PartyMedia } from '../entity/party-media.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PartyMediaService
  extends BaseCRUDService<PartyMedia, PartyMediaRepo, BaseQueryDto>
  implements IBaseCRUDService<PartyMedia, BaseQueryDto>
{
  constructor(private readonly repo: PartyMediaRepo) {
    super(repo);
  }
}
