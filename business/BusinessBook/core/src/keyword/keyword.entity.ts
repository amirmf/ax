import { AbstractEntity } from 'src/generic/entity/base.entity';
import {
  Column,
  Entity,
  ManyToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { Business } from '../business/business.entity';
import { Content } from 'src/content/entity/content.entity';
import { ContentCategory } from 'src/content/entity/content-category.entity';

@Entity()
@Tree('closure-table')
export class Keyword extends AbstractEntity {
  @Column({ length: 150 })
  title: string;

  @Column({ default: 1 })
  seqNum: number;

  @Column({ default: 50 }) // between 1-100 have two methods call calcWeight and calcSeqNum
  weight: number;

  @ManyToMany(() => Business, (business) => business.keywords)
  businesses: Business[];

  @ManyToMany(() => Content, (content) => content.keywords, { nullable: true })
  contents: Content[];

  @ManyToMany(
    () => ContentCategory,
    (contentCategory) => contentCategory.keywords,
    { nullable: true },
  )
  contentCategories: ContentCategory[];

  @TreeChildren()
  children: Keyword[];

  @TreeParent()
  parent: Keyword;
}
