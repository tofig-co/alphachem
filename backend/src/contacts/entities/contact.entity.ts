import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  adressAZ: string;

  @Column()
  adressEN: string;

  @Column()
  adressRU: string;

  @Column()
  phones: string;

  @Column()
  emails: string;

  @Column()
  locationLat: string;

  @Column()
  locationLong: string;
}
