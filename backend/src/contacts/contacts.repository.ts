import { EntityRepository, Repository } from "typeorm";
import { Contact } from "./entities/contact.entity";
import { CreateContactDto } from "./dto/create-contact.dto";

@EntityRepository(Contact)
export class ContactsRepository extends Repository<Contact> {
  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    const {
      adressAZ,
      adressEN,
      adressRU,
      phones,
      emails,
      locationLat,
      locationLong,
    } = createContactDto;

    const contact = new Contact();

    contact.adressAZ = adressAZ;
    contact.adressEN = adressEN;
    contact.adressRU = adressRU;
    contact.phones = phones;
    contact.emails = emails;
    contact.locationLat = locationLat;
    contact.locationLong = locationLong;

    await contact.save();

    return contact;
  }
}
