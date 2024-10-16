import { ChildEntity, ManyToOne } from 'typeorm';
import { Content } from '../content/entity/content.entity';
import { Business } from '../business/business.entity';
import { Lead } from '../lead/lead.entity';

@ChildEntity()
export class About extends Content {
  @ManyToOne(() => Business, (business) => business.abouts, { nullable: true })
  business: Business;

  @ManyToOne(() => Lead, (lead) => lead.abouts, { nullable: true })
  lead: Lead;
}
