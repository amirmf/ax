import { AbstractEntity } from 'src/generic/entity/base.entity';
import { ChildEntity, Column, Entity, ManyToOne, OneToMany, TableInheritance } from 'typeorm';
import { Execution } from './execution.entity';

export enum LLMAppProviderEnum {
    DIFY = 'DIFY',
    SUPERAGI = 'SUPERAGI',
    LANGFLOW = 'LANGFLOW',
}

export enum LLMAppStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'appType' } })
export class LLMApp extends AbstractEntity {
    
  @Column({ length: 255 }) 
  title: string;

  @Column({ length: 255, default:'general' }) 
  subject: string;

  @Column({ length: 510, nullable: true }) 
  description: string;

  @Column({
    type: 'enum',
    enum: LLMAppProviderEnum,
    default: LLMAppProviderEnum.DIFY,
  })
  provider: LLMAppProviderEnum;

  @Column({ length: 255 }) 
  providerExtId: string;

  @Column({
    type: 'enum',
    enum: LLMAppStatusEnum,
    default: LLMAppStatusEnum.INACTIVE,
  })
  status: LLMAppStatusEnum;

  // @OneToMany(() => PortalAppl, (portal) => portal.llmapp, {
  //   cascade: true,
  //   nullable: true,
  // })
  // portals: PortalAppl[];

  @OneToMany(() => Execution, (execution) => execution.llmapp, {
    cascade: true,
    nullable: true,
  })
  executions: Execution[];

//   @OneToMany(() => AutomationRule, (automationRule) => automationRule.automation, {
//     cascade: true,
//     nullable: true,
//   })
//   automationRules: AutomationRule[];

//   @OneToMany(() => Job, (job) => job.automation, {
//     cascade: true,
//     nullable: true,
//   })
//   jobs: Job[];

//   @OneToMany(() => Event, (event) => event.automation, {
//     cascade: true,
//     nullable: true,
//   })
//   events: Event[];


//   @ManyToMany(() => ContentCategory, (category) => category.contents, {
//     cascade: true,
//     nullable: true,
//   })
//   @JoinTable()
//   categories: ContentCategory[];

// @Entity()
// @Tree('closure-table')
// export class ContentCategory extends AbstractEntity {
//   @Column({ length: 150 })
//   title: string;

//   @ManyToMany(() => Keyword, (keywords) => keywords.businesses, {
//     nullable: true,
//   })
//   @JoinTable()
//   keywords: Keyword[];

//   @ManyToMany(() => Content, (content) => content.categories, {
//     nullable: true,
//   })
//   contents: Content[];

//   @TreeChildren()
//   children: ContentCategory[];

//   @TreeParent()
//   parent: ContentCategory;
// }


}
