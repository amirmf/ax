import { ChildEntity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Party } from '../party/entity/party.entity';
import { Post } from '../post/post.entity';
import { News } from '../news/news.entity';
import { About } from '../about/about.entity';
import { Portfolio } from '../portfolio/portfolio.entity';
import { Lead } from '../lead/lead.entity';
import { Customer } from '../customer/customer.entity';
import { Competitor } from '../competitor/competitor.entity';
import { Audience } from '../audience/audience.entity';
import { Keyword } from '../keyword/keyword.entity';

@ChildEntity()
export class Business extends Party {
  // contents
  @OneToMany(() => Post, (post) => post.business)
  posts: Post[];

  @OneToMany(() => News, (news) => news.business)
  news: News[];

  @OneToMany(() => About, (about) => about.business)
  abouts: About[];

  @OneToMany(() => Portfolio, (portfolio) => portfolio.business)
  portfolios: Portfolio[];

  // party relations
  @OneToMany(() => Lead, (lead) => lead.business)
  leads: Lead[];

  @OneToMany(() => Customer, (customer) => customer.business)
  customers: Customer[];

  @OneToMany(() => Competitor, (competitor) => competitor.business)
  competitors: Competitor[];

  @OneToMany(() => Audience, (audiences) => audiences.business)
  audiences: Audience[];

  // keywords
  @ManyToMany(() => Keyword, (keywords) => keywords.businesses, {
    cascade: true,
    nullable: true,
  })
  @JoinTable()
  keywords: Keyword[];
}
