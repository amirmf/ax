import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Media } from './media.entity';
import { MediaRepo as MediaRepo } from './media.repo';
import { Injectable } from '@nestjs/common';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class MediaService
  extends BaseCRUDService<Media, MediaRepo, BaseQueryDto>
  implements IBaseCRUDService<Media, BaseQueryDto>
{
  constructor(private readonly repo: MediaRepo) {
    super(repo);
  }
}
