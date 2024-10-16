import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Column, Entity, Tree, TreeChildren, TreeParent } from 'typeorm';
import { PartyStandardClassTypeEnum } from '../enum/party-standard-class-type.enum';

@Entity()
@Tree('closure-table')
export class PartyStandardClass extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: PartyStandardClassTypeEnum,
    nullable: false,
  })
  partyStandardClassTypeEnum: PartyStandardClassTypeEnum;

  @Column({ length: 100, nullable: false })
  title: string;

  @TreeChildren()
  children: PartyStandardClass[];

  @TreeParent()
  parent: PartyStandardClass;
}
