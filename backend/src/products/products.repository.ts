import { EntityRepository, Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async createProduct(
    filename: string,
    createProductDto: CreateProductDto
  ): Promise<Product> {
    const product = new Product();
    product.titleAZ = createProductDto.titleAZ;
    product.titleEN = createProductDto.titleEN;
    product.titleRU = createProductDto.titleRU;
    product.imageUrl = filename;

    await product.save();

    return product;
  }
}
