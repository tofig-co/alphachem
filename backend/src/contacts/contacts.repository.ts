import { EntityRepository, Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@EntityRepository(Contact)
export class ContactsRepository extends Repository<Contact> {
  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    const { phones } = createContactDto;

    const contact = new Contact();

    contact.phones = phones;

    await contact.save();

    return contact;
  }
}
