import { HttpCode, HttpStatus, Type, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaginateDto<T> {
  @ApiProperty({ isArray: true })
  data: T[];

  @ApiProperty()
  @IsNumber()
  count: number;
}

export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(PaginateDto, dataDto),
    HttpCode(HttpStatus.OK),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginateDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
              count: {
                type: 'number',
              },
            },
          },
        ],
      },
    }),
  );
