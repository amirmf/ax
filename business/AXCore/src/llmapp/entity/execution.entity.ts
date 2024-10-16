import { AbstractEntity } from 'src/generic/entity/base.entity';
import { ChildEntity, Column, Entity, ManyToOne, OneToMany, TableInheritance } from 'typeorm';
import { LLMApp } from './llmapp.entity';

@Entity()
export class Execution extends AbstractEntity {
  
  @ManyToOne(() => LLMApp, (llmapp) => llmapp.executions, { nullable: true })
  llmapp: LLMApp;

}
