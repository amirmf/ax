import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessRepo } from './business.repo';
import { Business } from './business.entity';
import { BusinessMapper } from './business.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
  controllers: [BusinessController],
  providers: [BusinessRepo, BusinessMapper, BusinessService],
  exports: [BusinessService],
})
export class BusinessModule {}
