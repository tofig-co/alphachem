import { EntityRepository, Repository } from 'typeorm';
import { CreateAboutDto } from './dto/create-about.dto';
import { About } from './entities/about.entity';

@EntityRepository(About)
export class AboutRepository extends Repository<About> {
  async createAbout(createAbout: CreateAboutDto): Promise<About> {
    const { az, en, ru } = createAbout;
    const about = new About();

    about.az = az;
    about.en = en;
    about.ru = ru;
    await about.save();

    return about;
  }
}
