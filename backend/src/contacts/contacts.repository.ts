import { EntityRepository, Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';

@EntityRepository(Contact)
export class ContactsRepository extends Repository<Contact> {}
