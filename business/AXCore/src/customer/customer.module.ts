import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepo } from './customer.repo';
import { Customer } from './customer.entity';
import { CustomerMapper } from './customer.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerRepo, CustomerMapper, CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
