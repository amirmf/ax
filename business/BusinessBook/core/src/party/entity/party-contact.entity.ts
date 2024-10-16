import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Party } from './party.entity';
import { PartyContactTypeEnum } from '../enum/party-contact-type.enum';
import { Media } from 'src/media/media.entity';

@Entity()
export class PartyContact extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: PartyContactTypeEnum,
  })
  partyContactTypeEnum: PartyContactTypeEnum;

  @Column({ length: 100, nullable: true })
  title: string;

  @Column({ length: 500 })
  contactValue: string;

  @ManyToOne(() => Party, (party) => party.contacts)
  party: Party;

  @OneToOne(() => Media, { cascade: true, nullable: true })
  @JoinColumn()
  media: Media;
}
