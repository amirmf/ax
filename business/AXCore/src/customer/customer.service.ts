import { BaseCRUDService } from 'src/generic/service/base.crud.service';
import { IBaseCRUDService } from 'src/generic/service/base.crud.service.interface';
import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerRepo } from './customer.repo';
import { BaseQueryDto } from 'src/generic/dto/base.query.dto';

@Injectable()
export class CustomerService
  extends BaseCRUDService<Customer, CustomerRepo, BaseQueryDto>
  implements IBaseCRUDService<Customer, BaseQueryDto>
{
  constructor(private readonly repo: CustomerRepo) {
    super(repo);
  }
}
