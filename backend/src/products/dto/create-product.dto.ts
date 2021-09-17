import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  titleAZ: string;
  @IsNotEmpty()
  titleEN: string;
  @IsNotEmpty()
  titleRU: string;
}
