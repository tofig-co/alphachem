import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AboutService } from "./about.service";
import { CreateAboutDto } from "./dto/create-about.dto";
import { UpdateAboutDto } from "./dto/update-about.dto";
import { About } from "./entities/about.entity";

@Controller("about")
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  create(@Body() createAboutDto: CreateAboutDto): Promise<About> {
    return this.aboutService.create(createAboutDto);
  }

  @Get()
  find(): Promise<About[]> {
    return this.aboutService.find();
  }

  @Patch(":id")
  @UseGuards(AuthGuard())
  update(@Body() updateAboutDto: UpdateAboutDto, @Param("id") id: string) {
    return this.aboutService.update(updateAboutDto, +id);
  }

  @Delete(":id")
  @UseGuards(AuthGuard())
  remove(@Param("id") id: string) {
    return this.aboutService.remove(+id);
  }
}
