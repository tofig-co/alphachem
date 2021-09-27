import { IsNotEmpty, IsOptional } from "class-validator";

export class FilterDto {
  @IsOptional()
  @IsNotEmpty()
  category: string;
}
