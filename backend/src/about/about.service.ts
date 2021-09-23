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

  async findOne(id: number) {
    const found = await this.aboutRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Product with id: "${id}" is not found`);
    }
    return found;
  }

  async find(): Promise<About[]> {
    const found = await this.aboutRepository.find();

    if (!found) {
      throw new NotFoundException(`About not found`);
    }
    return found.sort((a, b) => {
      let compare = 0;
      if (a.id > b.id) {
        compare = 1;
      } else if (b.id > a.id) {
        compare = -1;
      }
      return compare;
    });
  }

  async update(updateAboutDto: UpdateAboutDto, id: number): Promise<About> {
    const about = await this.findOne(id);
    about.titleAZ = updateAboutDto.titleAZ;
    about.titleEN = updateAboutDto.titleEN;
    about.titleRU = updateAboutDto.titleRU;
    about.descriptionAZ = updateAboutDto.descriptionAZ;
    about.descriptionEN = updateAboutDto.descriptionEN;
    about.descriptionRU = updateAboutDto.descriptionRU;
    await about.save();
    return about;
  }

  async remove(id: number) {
    const result = await this.aboutRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`About with id: "${id}" is not found`);
    }
  }
}
