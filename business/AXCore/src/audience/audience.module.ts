import { Module } from '@nestjs/common';
import { AudienceController } from './audience.controller';
import { AudienceService } from './audience.service';
import { AudienceRepo } from './audience.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audience } from './audience.entity';
import { AudienceMapper } from './audience.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Audience])],
  controllers: [AudienceController],
  providers: [AudienceRepo, AudienceMapper, AudienceService],
  exports: [AudienceService],
})
export class AudienceModule {}
