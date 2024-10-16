import { BaseRepo } from 'src/generic/repo/base.repo';
import { Repository } from 'typeorm';
import { IBaseRepo } from 'src/generic/repo/base.repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerRepo
  extends BaseRepo<Customer>
  implements IBaseRepo<Customer>
{
  constructor(
    @InjectRepository(Customer) private readonly repo: Repository<Customer>,
  ) {
    super(repo);
  }
}
