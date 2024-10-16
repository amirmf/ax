import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { PartyMediaTypeEnum } from '../enum/party-media-type.enum';
import { Media } from '../../media/media.entity';
import { Party } from './party.entity';

@Entity()
export class PartyMedia extends AbstractEntity {
  @Column({ length: 150 })
  title: string;

  @Column({
    type: 'enum',
    enum: PartyMediaTypeEnum,
  })
  partyMediaTypeEnum: PartyMediaTypeEnum;

  @OneToOne(() => Media, { cascade: true })
  @JoinColumn()
  media: Media;

  @ManyToOne(() => Party, (party) => party.medias)
  party: Party;
}
