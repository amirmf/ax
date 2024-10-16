import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { Customer } from './customer.entity';
import { CustomerOneDto } from './dto/customer.one.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerMapper extends AbstractMapper<Customer, CustomerOneDto> {}
