import { PaginateDto } from '../dto/paginate.dto';

export interface ICrudController<OneDto, QueryDto> {
  findAll(dto: QueryDto): Promise<PaginateDto<OneDto>>;

  findById(id: number): Promise<OneDto>;

  create(body: OneDto): Promise<OneDto>;

  delete(id: number): void;

  update(body: OneDto): Promise<OneDto>;
}
