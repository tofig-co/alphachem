import { EntityRepository, Repository } from "typeorm";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { Slider } from "./entities/slider.entity";

@EntityRepository(Slider)
export class SliderRepository extends Repository<Slider> {
  async createSlider(
    filename: string,
    createSliderDto: CreateSliderDto
  ): Promise<Slider> {
    const slider = new Slider();
    slider.titleAZ = createSliderDto.titleAZ;
    slider.descriptionAZ = createSliderDto.descriptionAZ;
    slider.titleEN = createSliderDto.titleEN;
    slider.descriptionEN = createSliderDto.descriptionEN;
    slider.titleRU = createSliderDto.titleRU;
    slider.descriptionRU = createSliderDto.descriptionRU;
    slider.imageUrl = filename;

    await slider.save();

    return slider;
  }
}
