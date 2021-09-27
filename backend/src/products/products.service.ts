import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsRepository } from "./products.repository";
import { Product } from "./entities/product.entity";
import { FilterDto } from "./dto/filter.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository
  ) {}
  async create(
    filename: string,
    createProductDto: CreateProductDto
  ): Promise<Product> {
    return this.productsRepository.createProduct(filename, createProductDto);
  }

  async findAll(category: FilterDto): Promise<Product[]> {
    return this.productsRepository.getProducts(category);
  }

  async findOne(id: number) {
    const found = await this.productsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Product with id: "${id}" is not found`);
    }
    return found;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    const product = await this.findOne(id);
    const category = (updateProductDto.category as unknown as string[]).join(
      ","
    );

    product.titleAZ = updateProductDto.titleAZ;
    product.titleEN = updateProductDto.titleEN;
    product.titleRU = updateProductDto.titleRU;
    product.descriptionAZ = updateProductDto.descriptionAZ;
    product.descriptionEN = updateProductDto.descriptionEN;
    product.descriptionRU = updateProductDto.descriptionRU;
    product.category = category;

    await product.save();
    return product;
  }

  async remove(id: number) {
    const result = await this.productsRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Product with id: "${id}" is not found`);
    }
  }
}
