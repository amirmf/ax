import { ChildEntity, ManyToOne } from 'typeorm';
import { Content } from '../content/entity/content.entity';
import { Business } from '../business/business.entity';

@ChildEntity()
export class Post extends Content {
  @ManyToOne(() => Business, (business) => business.posts)
  business: Business;
}
