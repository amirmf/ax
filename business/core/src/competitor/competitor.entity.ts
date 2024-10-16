import { ChildEntity, ManyToOne } from 'typeorm';
import { Party } from '../party/entity/party.entity';
import { Business } from '../business/business.entity';

@ChildEntity()
export class Competitor extends Party {
  @ManyToOne(() => Business, (business) => business.competitors)
  business: Business;
}
