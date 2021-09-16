import { IsNotEmpty } from "class-validator";

export class CreateAboutDto {
  @IsNotEmpty()
  az: string;

  @IsNotEmpty()
  en: string;

  @IsNotEmpty()
  ru: string;
}
