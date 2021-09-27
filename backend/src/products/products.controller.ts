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
  UsePipes,
  ValidationPipe,
  UseGuards,
  Query,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { editFileName, imageFileFilter } from "src/utils/file-uploading.utils";
import { diskStorage } from "multer";
import { Product } from "./entities/product.entity";
import { AuthGuard } from "@nestjs/passport";
import { categories } from "./categories";
import { FilterDto } from "./dto/filter.dto";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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
    @Body() body: CreateProductDto
  ): Promise<Product> {
    return this.productsService.create(file.filename, body);
  }

  @Get("/image/:imgpath")
  getFile(@Param("imgpath") image, @Res() res) {
    return res.sendFile(image, { root: "./uploads" });
  }

  @Get()
  findAll(@Query() category: FilterDto): Promise<Product[]> {
    return this.productsService.findAll(category);
  }

  @Get("/categories")
  find() {
    return categories;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard())
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard())
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
