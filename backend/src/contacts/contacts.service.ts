import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactsRepository } from './contacts.repository';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository
  ) {}
  async create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  async find(): Promise<Contact> {
    return this.contactsRepository.findOne(undefined);
  }

  async update(updateContactDto: UpdateContactDto) {
    return `This action updates a  contact`;
  }
}
