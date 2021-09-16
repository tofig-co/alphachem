import { IsNotEmpty } from 'class-validator';
import { PhoneNumber } from './../entities/phoneNumber.entity';

export class CreateContactDto {
  @IsNotEmpty()
  adressAZ: string;

  @IsNotEmpty()
  adressEN: string;

  @IsNotEmpty()
  adressRU: string;

  phones: PhoneNumber[];

  emails: string[];

  @IsNotEmpty()
  locationLat: string;

  @IsNotEmpty()
  locationLong: string;
}
