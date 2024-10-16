import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { AboutRepo as AboutRepo } from './about.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class AboutService
  extends BaseCRUDService<About, AboutRepo, BaseQueryDto>
  implements IBaseCRUDService<About, BaseQueryDto>
{
  constructor(private readonly repo: AboutRepo) {
    super(repo);
  }
}
