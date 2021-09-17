import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { UpdateSliderDto } from "./dto/update-slider.dto";
import { Slider } from "./entities/slider.entity";
import { SliderRepository } from "./slider.repository";

@Injectable()
export class SliderService {
  constructor(
    @InjectRepository(SliderRepository)
    private sliderRepository: SliderRepository
  ) {}
  async create(
    filename: string,
    createSliderDto: CreateSliderDto
  ): Promise<Slider> {
    return this.sliderRepository.createSlider(filename, createSliderDto);
  }

  async findAll(): Promise<Slider[]> {
    return this.sliderRepository.find();
  }

  async findOne(id: number): Promise<Slider> {
    return this.sliderRepository.findOne(id);
  }

  async update(id: number, updateSliderDto: UpdateSliderDto): Promise<Slider> {
    const slide = await this.findOne(id);

    slide.titleAZ = updateSliderDto.titleAZ;
    slide.descriptionAZ = updateSliderDto.descriptionAZ;
    slide.titleEN = updateSliderDto.titleEN;
    slide.descriptionEN = updateSliderDto.descriptionEN;
    slide.titleRU = updateSliderDto.titleRU;
    slide.descriptionRU = updateSliderDto.descriptionRU;

    await slide.save();

    return slide;
  }

  async remove(id: number) {
    const result = await this.sliderRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Slide with id: "${id}" is not found`);
    }
  }
}
