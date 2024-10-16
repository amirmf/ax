import { ChildEntity, Column, ManyToOne } from 'typeorm';
import { Party } from '../party/entity/party.entity';
import { Business } from '../business/business.entity';

@ChildEntity()
export class Customer extends Party {
  @Column({ nullable: true })
  sources: string;

  @Column({ nullable: true })
  intrests: string;

  @ManyToOne(() => Business, (business) => business.customers)
  business: Business;
}
