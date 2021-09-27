import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titleAZ: string;

  @Column()
  titleEN: string;

  @Column()
  titleRU: string;

  @Column()
  descriptionAZ: string;

  @Column()
  descriptionEN: string;

  @Column()
  descriptionRU: string;

  @Column()
  category: string;

  @Column()
  imageUrl: string;
}
