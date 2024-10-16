import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutRepo } from './about.repo';
import { About } from './about.entity';
import { AboutMapper } from './about.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  controllers: [AboutController],
  providers: [AboutRepo, AboutMapper, AboutService],
  exports: [AboutService],
})
export class AboutModule {}
