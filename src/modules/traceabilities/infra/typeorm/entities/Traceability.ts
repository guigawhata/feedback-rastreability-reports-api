import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export default class Traceability {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  lot: string;
}
