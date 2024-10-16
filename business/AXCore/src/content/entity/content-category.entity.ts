import { AbstractEntity } from 'src/generic/entity/base.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { Content } from 'src/content/entity/content.entity';
import { Keyword } from 'src/keyword/keyword.entity';

@Entity()
@Tree('closure-table')
export class ContentCategory extends AbstractEntity {
  @Column({ length: 150 })
  title: string;

  @ManyToMany(() => Keyword, (keywords) => keywords.businesses, {
    nullable: true,
  })
  @JoinTable()
  keywords: Keyword[];

  @ManyToMany(() => Content, (content) => content.categories, {
    nullable: true,
  })
  contents: Content[];

  @TreeChildren()
  children: ContentCategory[];

  @TreeParent()
  parent: ContentCategory;
}
