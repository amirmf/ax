import { AbstractEntity } from 'src/generic/entity/base.entity';
import { Content } from 'src/content/entity/content.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Business } from '../business/business.entity';

@Entity()
export class Media extends AbstractEntity {
  @Column({ length: 255 })
  title: string;

  @Column({ default: 1 })
  seqNum: number;

  @ManyToOne(() => Business, (business) => business.leads)
  business: Business;

  @ManyToOne(() => Content, (content) => content.medias, { nullable: true })
  content: Content;

  // TODO: in future maybe add parentId for recursive relations
  // TODO: in future maybe add type
}
