import { ChildEntity, Column } from 'typeorm';
import { Content } from './content.entity';

@ChildEntity()
export class OtherContent extends Content {
  @Column({ length: 255 })
  otherTxt: string;
}
