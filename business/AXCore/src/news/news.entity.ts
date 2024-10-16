import { ChildEntity, ManyToOne } from 'typeorm';
import { Content } from '../content/entity/content.entity';
import { Business } from '../business/business.entity';

@ChildEntity()
export class News extends Content {
  @ManyToOne(() => Business, (business) => business.news)
  business: Business;
}
