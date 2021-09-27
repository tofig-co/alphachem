import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  titleAZ: string;

  @IsNotEmpty()
  titleEN: string;

  @IsNotEmpty()
  titleRU: string;

  @IsNotEmpty()
  descriptionAZ: string;

  @IsNotEmpty()
  descriptionEN: string;

  @IsNotEmpty()
  descriptionRU: string;

  @IsNotEmpty()
  category: string;
}
