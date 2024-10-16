import { Controller, Get } from '@nestjs/common';
import { ControllerFactory } from 'src/generic/controller/base.crud.controller';
import { CustomerService } from './customer.service';
import { CustomerQueryDto } from './dto/customer.query.dto';
import { CustomerMapper } from './customer.mapper';
import { Customer } from './customer.entity';
import { CustomerOneDto } from './dto/customer.one.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer')
@ApiBearerAuth('accessToken')
@Controller('/customer')
export class CustomerController extends ControllerFactory<
  Customer,
  CustomerOneDto,
  CustomerQueryDto
>(CustomerOneDto, CustomerQueryDto) {
  constructor(
    protected CRUDService: CustomerService,
    protected mapper: CustomerMapper,
  ) {
    super(CRUDService, mapper);
  }
  @Get('/test')
  test() {
    return 'test...';
  }
}
