import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class DataTableFilterMetaData {
  value: any;
  matchMode:
    | 'startsWith'
    | 'contains'
    | 'notContains'
    | 'endsWith'
    | 'equals'
    | 'notEquals'
    | 'in'
    | 'notIn'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'between'
    | 'dateIs'
    | 'dateIsNot'
    | 'dateBefore'
    | 'dateAfter'
    | 'custom'
    | undefined;
}

export class DataTableOperatorFilterMetaData {
  operator: string;
  constraints: DataTableFilterMetaData[];
}

export class DataTableFilterMeta {
  [key: string]: DataTableFilterMetaData | DataTableOperatorFilterMetaData;
}

export class BaseQueryDto {
  @ApiProperty({ default: 0, required: false })
  @IsInt() // only used in ui components
  first = 0;

  @ApiProperty({ default: 20, required: false })
  @IsInt()
  rows = 20;

  @ApiProperty({ default: 1, required: false })
  @IsInt()
  page = 1;

  @ApiProperty({ default: undefined, required: false })
  @IsString()
  @IsOptional()
  sortField: string = undefined;

  @ApiProperty({ default: null, required: false })
  @IsNumber()
  @IsOptional()
  sortOrder: 1 | 0 | -1 | null;

  @ApiProperty({ required: false })
  @Type(() => DataTableFilterMeta)
  @IsOptional()
  filters?: DataTableFilterMeta;
}
