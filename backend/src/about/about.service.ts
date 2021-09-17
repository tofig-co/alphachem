import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAboutDto } from "./dto/create-about.dto";
import { UpdateAboutDto } from "./dto/update-about.dto";
import { About } from "./entities/about.entity";
import { AboutRepository } from "./about.repository";

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(AboutRepository)
    private aboutRepository: AboutRepository
  ) {}
  async create(createAboutDto: CreateAboutDto): Promise<About> {
    return this.aboutRepository.createAbout(createAboutDto);
  }

  async find(): Promise<About> {
    const found = await this.aboutRepository.findOne(undefined);

    if (!found) {
      throw new NotFoundException(`About not found`);
    }
    return found;
  }

  async update(updateAboutDto: UpdateAboutDto): Promise<About> {
    const about = await this.find();
    about.az = updateAboutDto.az;
    about.en = updateAboutDto.en;
    about.ru = updateAboutDto.ru;
    await about.save();
    return about;
  }
}
