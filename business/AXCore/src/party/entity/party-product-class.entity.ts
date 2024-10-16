import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Party } from './party.entity';
import { PartyStandardClass } from './party-standard-class.entity';
import { OtherContent } from '../../content/entity/content-other.entity';

@Entity()
export class PartyProductClass extends AbstractEntity {
  @Column({ length: 255, nullable: true })
  prompt: string; // TODO: in future AOP for selecting classValue

  @Column({ default: 1 })
  seqNum: number;

  @Column({ default: false })
  isMain: boolean;

  @ManyToOne(() => Party, (party) => party.productClasses)
  party: Party;

  @ManyToOne(() => PartyStandardClass)
  classValue: PartyStandardClass;

  @OneToOne(() => OtherContent, { cascade: true, nullable: true })
  @JoinColumn()
  content: OtherContent;
}
