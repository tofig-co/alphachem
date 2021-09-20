import { EntityRepository, Repository } from "typeorm";
import { CreateAboutDto } from "./dto/create-about.dto";
import { About } from "./entities/about.entity";

@EntityRepository(About)
export class AboutRepository extends Repository<About> {
  async createAbout(createAbout: CreateAboutDto): Promise<About> {
    const {
      titleAZ,
      titleEN,
      titleRU,
      descriptionAZ,
      descriptionEN,
      descriptionRU,
    } = createAbout;
    const about = new About();

    about.titleAZ = titleAZ;
    about.titleEN = titleEN;
    about.titleRU = titleRU;
    about.descriptionAZ = descriptionAZ;
    about.descriptionEN = descriptionEN;
    about.descriptionRU = descriptionRU;

    await about.save();

    return about;
  }
}
