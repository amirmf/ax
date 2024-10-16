import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Column, Entity, OneToMany, TableInheritance } from 'typeorm';
import { PartyBusinessClass } from './party-business-class.entity';
import { PartyProductClass } from './party-product-class.entity';
import { SellQuantityTypeEnum } from '../enum/sell-quantity-type.enum';
import { PartyIdentifierTypeEnum } from '../enum/party-identifier-type.enum';
import { PartyContact } from './party-contact.entity';
import { PartyMedia } from './party-media.entity';
import { PartyIdentifier } from './party-identifier.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'partyType' } })
export class Party extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: PartyIdentifierTypeEnum,
    default: PartyIdentifierTypeEnum.USERNAME,
  })
  identifierTypeEnum: PartyIdentifierTypeEnum;

  @Column({ length: 100, nullable: true })
  identifier: string;

  @Column({ length: 150 })
  title: string;

  @Column({ length: 60, nullable: true })
  firstName: string;

  @Column({ length: 60, nullable: true })
  lastName: string;

  @Column({ length: 500, nullable: true })
  introductionPrompt: string;

  @Column({ length: 255, nullable: true })
  slogan: string;

  @Column({ default: true })
  isSellProduct: boolean; // TODO: in future change it to sell methods...enum maybe.

  @Column({
    type: 'enum',
    enum: SellQuantityTypeEnum,
    nullable: true,
  })
  sellQuantityTypeEnum: SellQuantityTypeEnum;

  @OneToMany(() => PartyBusinessClass, (businessClass) => businessClass.party, {
    cascade: true,
  })
  businessClasses: PartyBusinessClass[];

  @OneToMany(() => PartyProductClass, (productClass) => productClass.party, {
    cascade: true,
  })
  productClasses: PartyProductClass[];

  @OneToMany(() => PartyContact, (contact) => contact.party)
  contacts: PartyContact[];

  @OneToMany(() => PartyMedia, (media) => media.party, { cascade: true })
  medias: PartyMedia[];

  @OneToMany(
    () => PartyIdentifier,
    (partyIidentifier) => partyIidentifier.party,
    { cascade: true },
  )
  identifiers: PartyIdentifier[];

  // TODO: in future
  // @Column()
  // isSellService: boolean;

  // @Column()
  // isSellSubscription: boolean;
}
