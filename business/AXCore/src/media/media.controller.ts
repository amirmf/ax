import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { Media } from './media.entity';
import { MediaService as MediaService } from './media.service';
import { MediaOneDto } from './dto/media.one.dto';
import { MediaQueryDto } from './dto/media.query.dto';
import { MediaMapper as MediaMapper } from './media.mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Media')
@ApiBearerAuth('accessToken')
@Controller('/media')
export class MediaController extends ControllerFactory<
  Media,
  MediaOneDto,
  MediaQueryDto
>(MediaOneDto, MediaQueryDto) {
  constructor(
    protected CRUDService: MediaService,
    protected mapper: MediaMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
