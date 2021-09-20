import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class About extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titleAZ: string;

  @Column()
  descriptionAZ: string;

  @Column()
  titleEN: string;

  @Column()
  descriptionEN: string;

  @Column()
  titleRU: string;

  @Column()
  descriptionRU: string;
}
