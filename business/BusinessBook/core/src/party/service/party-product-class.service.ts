import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { PartyProductClassRepo as PartyProductClassRepo } from '../repo/party-product-class.repo';
import { Injectable } from '@nestjs/common';
import { PartyProductClass } from '../entity/party-product-class.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class PartyProductClassService
  extends BaseCRUDService<
    PartyProductClass,
    PartyProductClassRepo,
    BaseQueryDto
  >
  implements IBaseCRUDService<PartyProductClass, BaseQueryDto>
{
  constructor(private readonly repo: PartyProductClassRepo) {
    super(repo);
  }
}
