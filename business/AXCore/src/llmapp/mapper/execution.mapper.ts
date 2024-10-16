import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { Injectable } from '@nestjs/common';
import { ExecutionOneDto } from '../dto/execution.one.dto';
import { Execution } from '../entity/execution.entity';

@Injectable()
export class ExecutionMapper extends AbstractMapper<Execution, ExecutionOneDto> {}
