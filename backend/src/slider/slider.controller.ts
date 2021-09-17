import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  ValidationPipe,
  UsePipes,
} from "@nestjs/common";
import { diskStorage } from "multer";
import { SliderService } from "./slider.service";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { UpdateSliderDto } from "./dto/update-slider.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { editFileName, imageFileFilter } from "src/utils/file-uploading.utils";
import { Slider } from "./entities/slider.entity";

@Controller("slider")
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(
    FileInterceptor("photo", {
      storage: diskStorage({
        destination: "./uploads",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  create(
    @UploadedFile() file,
    @Body() createSliderDto: CreateSliderDto
  ): Promise<Slider> {
    return this.sliderService.create(file.filename, createSliderDto);
  }

  @Get("/image/:imgpath")
  getFile(@Param("imgpath") image, @Res() res) {
    return res.sendFile(image, { root: "./uploads" });
  }

  @Get()
  findAll(): Promise<Slider[]> {
    return this.sliderService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Slider> {
    return this.sliderService.findOne(+id);
  }

  @Patch(":id")
  @UsePipes(ValidationPipe)
  update(
    @Param("id") id: string,
    @Body() updateSliderDto: CreateSliderDto
  ): Promise<Slider> {
    return this.sliderService.update(+id, updateSliderDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sliderService.remove(+id);
  }
}
