import { AbstractEntity } from 'src/generic/entity/base.entity';
import { ChildEntity, ManyToOne } from 'typeorm';

@ChildEntity()
export class About extends AbstractEntity {

}
