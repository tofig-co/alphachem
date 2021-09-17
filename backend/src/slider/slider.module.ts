import { Module } from "@nestjs/common";
import { SliderService } from "./slider.service";
import { SliderController } from "./slider.controller";
import { SliderRepository } from "./slider.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SliderRepository])],
  controllers: [SliderController],
  providers: [SliderService],
})
export class SliderModule {}
