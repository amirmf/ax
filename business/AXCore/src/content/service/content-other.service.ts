import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { OtherContentRepo as OtherContentRepo } from '../repo/content-other.repo';
import { Injectable } from '@nestjs/common';
import { OtherContent } from '../entity/content-other.entity';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class OtherContentService
  extends BaseCRUDService<OtherContent, OtherContentRepo, BaseQueryDto>
  implements IBaseCRUDService<OtherContent, BaseQueryDto>
{
  constructor(private readonly repo: OtherContentRepo) {
    super(repo);
  }
}
