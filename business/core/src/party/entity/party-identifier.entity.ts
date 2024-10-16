import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Party } from './party.entity';
import { PartyIdentifierTypeEnum } from '../enum/party-identifier-type.enum';

@Entity()
export class PartyIdentifier extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: PartyIdentifierTypeEnum,
    default: PartyIdentifierTypeEnum.USERNAME,
  })
  partyIdentifierTypeEnum: PartyIdentifierTypeEnum;

  @Column({ length: 100 })
  identifier: string;

  @ManyToOne(() => Party, (party) => party.identifiers)
  party: Party;
}
