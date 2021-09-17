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
  UseGuards,
} from "@nestjs/common";
import { diskStorage } from "multer";
import { SliderService } from "./slider.service";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { UpdateSliderDto } from "./dto/update-slider.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { editFileName, imageFileFilter } from "src/utils/file-uploading.utils";
import { Slider } from "./entities/slider.entity";
import { AuthGuard } from "@nestjs/passport";

@Controller("slider")
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Post()
  @UseGuards(AuthGuard())
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
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  update(
    @Param("id") id: string,
    @Body() updateSliderDto: CreateSliderDto
  ): Promise<Slider> {
    return this.sliderService.update(+id, updateSliderDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard())
  remove(@Param("id") id: string) {
    return this.sliderService.remove(+id);
  }
}
