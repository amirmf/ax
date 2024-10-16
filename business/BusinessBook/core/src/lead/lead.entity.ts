import { ChildEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Party } from '../party/entity/party.entity';
import { Business } from '../business/business.entity';
import { About } from '../about/about.entity';

@ChildEntity()
export class Lead extends Party {
  @Column({ nullable: true })
  sources: string;

  @Column({ nullable: true })
  intrests: string;

  @OneToMany(() => About, (about) => about.lead)
  abouts: About[];

  @ManyToOne(() => Business, (business) => business.leads)
  business: Business;
}
