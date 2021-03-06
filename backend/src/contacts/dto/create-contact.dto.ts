import { IsNotEmpty } from "class-validator";

export class CreateContactDto {
  @IsNotEmpty()
  adressAZ: string;

  @IsNotEmpty()
  adressEN: string;

  @IsNotEmpty()
  adressRU: string;

  @IsNotEmpty()
  phones: string;

  emails: string;

  @IsNotEmpty()
  locationLat: string;

  @IsNotEmpty()
  locationLong: string;
}
