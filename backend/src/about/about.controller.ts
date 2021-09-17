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
} from "@nestjs/common";
import { AboutService } from "./about.service";
import { CreateAboutDto } from "./dto/create-about.dto";
import { UpdateAboutDto } from "./dto/update-about.dto";
import { About } from "./entities/about.entity";

@Controller("about")
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createAboutDto: CreateAboutDto): Promise<About> {
    return this.aboutService.create(createAboutDto);
  }

  @Get()
  find(): Promise<About> {
    return this.aboutService.find();
  }

  @Patch()
  update(@Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.update(updateAboutDto);
  }
}
