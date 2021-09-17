import { Module } from "@nestjs/common";
import { SliderService } from "./slider.service";
import { SliderController } from "./slider.controller";
import { SliderRepository } from "./slider.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([SliderRepository]), AuthModule],
  controllers: [SliderController],
  providers: [SliderService],
})
export class SliderModule {}
