import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class About extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  az: string;

  @Column()
  en: string;

  @Column()
  ru: string;
}
