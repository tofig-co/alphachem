import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ContactsRepository } from "./contacts.repository";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { Contact } from "./entities/contact.entity";

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository
  ) {}
  async create(createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactsRepository.createContact(createContactDto);
  }

  async find(): Promise<Contact> {
    return this.contactsRepository.findOne(undefined);
  }

  async update(updateContactDto: UpdateContactDto): Promise<Contact> {
    const contact = await this.find();
    const {
      adressAZ,
      adressEN,
      adressRU,
      phones,
      emails,
      locationLat,
      locationLong,
    } = updateContactDto;

    contact.adressAZ = adressAZ;
    contact.adressEN = adressEN;
    contact.adressRU = adressRU;
    contact.phones = phones;
    contact.emails = emails;
    contact.locationLat = locationLat;
    contact.locationLong = locationLong;

    contact.save();
    return contact;
  }
}
