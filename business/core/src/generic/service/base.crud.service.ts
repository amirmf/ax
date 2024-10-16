import {
  Brackets,
  DeepPartial,
  FindOneOptions,
  SelectQueryBuilder,
  WhereExpressionBuilder,
} from 'typeorm';
import { IBaseCRUDService } from './base.crud.service.interface';
import { BaseRepo } from '../repo/base.repo';
import { AbstractEntity } from '../entity/base.entity';
import { PaginateDto } from '../dto/paginate.dto';
import {
  BaseQueryDto,
  DataTableFilterMetaData,
  DataTableOperatorFilterMetaData,
} from '../dto/base.query.dto';
import StringUtils from 'src/utils/string.util';

export abstract class BaseCRUDService<
  E extends AbstractEntity,
  R extends BaseRepo<E>,
  QueryDto extends BaseQueryDto,
> implements IBaseCRUDService<E, QueryDto>
{
  constructor(private readonly baseRepo: R) {}

  public async save(data: DeepPartial<E>): Promise<E> {
    return await this.baseRepo.save(data);
  }

  public async saveMany(data: DeepPartial<E>[]): Promise<E[]> {
    return this.baseRepo.saveMany(data);
  }

  public async create(data: DeepPartial<E>): Promise<E> {
    return await this.baseRepo.create(data);
  }

  public async createMany(data: DeepPartial<E>[]): Promise<E[]> {
    return await this.baseRepo.createMany(data);
  }

  public async findOneById(id: number): Promise<E> {
    return await this.baseRepo.findOneById(id);
  }

  public async findOne(options: FindOneOptions<E>): Promise<E> {
    return this.baseRepo.findOne(options);
  }

  public async findAll(
    take = 20,
    skip = 0,
    qb?: SelectQueryBuilder<E>,
  ): Promise<PaginateDto<E>> {
    return await this.baseRepo.findAll(take, skip, qb);
  }

  public async findAllByDto(dto: QueryDto): Promise<PaginateDto<E>> {
    return await this.findAll(
      dto.rows,
      (dto.page - 1) * dto.rows,
      this.DtoToQuery(dto),
    );
  }

  public async delete(id: number): Promise<number> {
    await this.baseRepo.delete(id);
    return id;
  }

  public async deleteMany(data: number[]): Promise<number[]> {
    await this.baseRepo.deleteMany(data);
    return data;
  }

  public async deleteSoft(data: number): Promise<number> {
    await this.baseRepo.deleteSoft(data);
    return data;
  }

  public async deleteSoftMany(data: number[]): Promise<number[]> {
    await this.baseRepo.deleteSoftMany(data);
    return data;
  }

  public async preload(entityLike: DeepPartial<E>): Promise<E> {
    return await this.baseRepo.preload(entityLike);
  }
  /**
   * Convert query dto of primereacts datatable to typeORM SelectQueryBuilder
   * @param dto filter object of primereacts datatable
   * @returns typeORM SelectQueryBuilder
   */
  private DtoToQuery(dto: QueryDto): SelectQueryBuilder<E> {
    let qb: SelectQueryBuilder<E> = undefined;
    let isFirst = true;
    qb = this.baseRepo.createQuery();
    const keys = Object.keys(!!dto.filters ? dto.filters : {});
    keys.forEach((key, index) => {
      if (
        // handle list filter
        !!(dto.filters[key] as DataTableOperatorFilterMetaData).constraints &&
        (dto.filters[key] as DataTableOperatorFilterMetaData).constraints
          .length > 0 &&
        !StringUtils.isEmpty(
          (dto.filters[key] as DataTableOperatorFilterMetaData).constraints[0]
            .value,
        )
      ) {
        const filterList = dto.filters[key] as DataTableOperatorFilterMetaData;
        if (index == 0) {
          qb = qb.where(
            new Brackets((qb_) => {
              isFirst = true;
              filterList.constraints.forEach((filterObj, index_) => {
                if (!StringUtils.isEmpty(filterObj.value)) {
                  qb_ = this.addWhereByDto(
                    qb_,
                    qb.alias,
                    key,
                    filterObj.matchMode,
                    key + index + index_,
                    filterObj.value,
                    filterList.operator,
                    isFirst,
                  ) as WhereExpressionBuilder;
                  isFirst = false;
                }
              });
              return qb_;
            }),
          );
        } else {
          qb = qb.andWhere(
            new Brackets((qb_) => {
              isFirst = true;
              filterList.constraints.forEach((filterObj, index_) => {
                if (!StringUtils.isEmpty(filterObj.value)) {
                  qb_ = this.addWhereByDto(
                    qb_,
                    qb.alias,
                    key,
                    filterObj.matchMode,
                    key + index + index_,
                    filterObj.value,
                    filterList.operator,
                    isFirst,
                  ) as WhereExpressionBuilder;
                  isFirst = false;
                }
              });
              return qb_;
            }),
          );
        }
      } else if (
        // handle single filter
        !StringUtils.isEmpty(
          (dto.filters[key] as DataTableFilterMetaData).value,
        )
      ) {
        const filterObj = dto.filters[key] as DataTableFilterMetaData;
        qb = this.addWhereByDto(
          qb,
          qb.alias,
          key,
          filterObj.matchMode,
          key,
          filterObj.value,
          'and',
          isFirst,
        ) as SelectQueryBuilder<E>;
        isFirst = false;
      }
    });
    if (!dto.sortField) dto.sortField = 'id';

    qb = qb.orderBy(
      qb.alias + '.' + dto.sortField,
      dto.sortOrder == 1 ? 'ASC' : 'DESC',
    );
    return qb;
  }

  private addWhereByDto(
    qb: SelectQueryBuilder<E> | WhereExpressionBuilder,
    alias: string,
    field: string,
    matchMode: string,
    parameterName: string,
    value: any,
    rulesOperator = 'and',
    isFirst = false,
  ): SelectQueryBuilder<E> | WhereExpressionBuilder {
    const operator = () => {
      switch (matchMode) {
        case 'startsWith': {
          value = value + '%';
          return 'like';
        }
        case 'contains': {
          value = '%' + value + '%';
          return 'like';
        }
        case 'notContains': {
          value = '%' + value + '%';
          return 'not like';
        }
        case 'endsWith': {
          value = value + '%';
          return 'like';
        }
        case 'equals':
          return '=';
        case 'notEquals':
          return '!=';
        case 'in': // cast to appropriate list
          return 'in';
        case 'notIn':
          return 'not in';
        case 'lt':
          return '<';
        case 'lte':
          return '<=';
        case 'gt':
          return '>';
        case 'gte':
          return '>=';
        case 'between':
          return 'between';
        case 'dateIs': // cast to appropriate date
          return '=';
        case 'dateIsNot':
          return '!=';
        case 'dateBefore':
          return '<';
        case 'dateAfter':
          return '>';
        default:
          return '=';
      }
    };

    const whereStr =
      (StringUtils.isEmpty(alias) ? '' : `${alias}.`) +
      `${field} ${operator()} :${parameterName}`;

    const params = {};
    params[parameterName] = value;
    if (isFirst) qb = qb.where(whereStr, params);
    else if (rulesOperator == 'or') qb.orWhere(whereStr, params);
    else qb.andWhere(whereStr, params);
    return qb;
  }
}
