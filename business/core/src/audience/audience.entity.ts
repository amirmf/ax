import { ChildEntity, ManyToOne } from 'typeorm';
import { Party } from '../party/entity/party.entity';
import { Business } from '../business/business.entity';

@ChildEntity()
export class Audience extends Party {
  @ManyToOne(() => Business, (business) => business.audiences)
  business: Business;
}
