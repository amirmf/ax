import { ChildEntity, ManyToOne } from 'typeorm';
import { Content } from '../content/entity/content.entity';
import { Business } from '../business/business.entity';

@ChildEntity()
export class Portfolio extends Content {
  constructor() {
    super();
  }
  @ManyToOne(() => Business, (business) => business.portfolios)
  business: Business;
}
