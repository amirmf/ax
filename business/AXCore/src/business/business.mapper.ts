import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { BusinessOneDto } from './dto/business.one.dto';
import { Business } from './business.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessMapper extends AbstractMapper<Business, BusinessOneDto> {}
