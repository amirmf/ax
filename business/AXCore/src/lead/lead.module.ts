import { Module } from '@nestjs/common';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadRepo } from './lead.repo';
import { Lead } from './lead.entity';
import { LeadMapper } from './lead.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  controllers: [LeadController],
  providers: [LeadRepo, LeadMapper, LeadService],
  exports: [LeadService],
})
export class LeadModule {}
