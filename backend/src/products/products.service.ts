import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsRepository } from "./products.repository";
import { Product } from "./entities/product.entity";

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

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    const product = await this.findOne(id);

    product.titleAZ = updateProductDto.titleAZ;
    product.titleEN = updateProductDto.titleEN;
    product.titleRU = updateProductDto.titleRU;

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
