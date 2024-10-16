import { AbstractEntity } from 'src/generic/entity/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  TableInheritance,
} from 'typeorm';
import { Media } from '../../media/media.entity';
import { ContentCategory } from './content-category.entity';
import { Keyword } from 'src/keyword/keyword.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Content extends AbstractEntity {
  @Column({ length: 255 })
  title: string;

  @Column({ length: 500, nullable: true })
  summary: string;

  @Column({ length: 500000 })
  txt: string;

  @Column({ default: 1 })
  seqNum: number;

  @OneToOne(() => Media, { cascade: true, nullable: true })
  @JoinColumn()
  poster: Media;

  @OneToMany(() => Media, (media) => media.content, {
    cascade: true,
    nullable: true,
  })
  medias: Media[];

  @ManyToMany(() => Keyword, (keywords) => keywords.businesses, {
    nullable: true,
  })
  @JoinTable()
  keywords: Keyword[];

  @ManyToMany(() => ContentCategory, (category) => category.contents, {
    cascade: true,
    nullable: true,
  })
  @JoinTable()
  categories: ContentCategory[];

  // related list
  // TODO: in future add parentId for recursive relations???????????
}
