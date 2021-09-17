import { IsNotEmpty } from "class-validator";

export class CreateSliderDto {
  @IsNotEmpty()
  titleAZ: string;

  @IsNotEmpty()
  descriptionAZ: string;

  @IsNotEmpty()
  titleEN: string;

  @IsNotEmpty()
  descriptionEN: string;

  @IsNotEmpty()
  titleRU: string;

  @IsNotEmpty()
  descriptionRU: string;
}
