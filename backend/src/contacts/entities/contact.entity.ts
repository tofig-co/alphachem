import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhoneNumber } from './phoneNumber.entity';

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  //   @Column()
  //   adressAZ: string;

  //   @Column()
  //   adressEN: string;

  //   @Column()
  //   adressRU: string;

  @OneToMany((type) => PhoneNumber, (phoneNumber) => phoneNumber.contact)
  phones: PhoneNumber[];

  //   @Column()
  //   emails: string[];

  //   @Column()
  //   locationLat: string;

  //   @Column()
  //   locationLong: string;
}
