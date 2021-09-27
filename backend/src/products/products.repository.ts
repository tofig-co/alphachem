import { EntityRepository, Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { FilterDto } from "./dto/filter.dto";
import { categories } from "./categories";

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
    product.descriptionAZ = createProductDto.descriptionAZ;
    product.descriptionEN = createProductDto.descriptionEN;
    product.descriptionRU = createProductDto.descriptionRU;
    product.category = createProductDto.category;
    product.imageUrl = filename;

    await product.save();

    return product;
  }

  async getProducts(filter: FilterDto): Promise<Product[]> {
    const { category } = filter;
    const query = this.createQueryBuilder("product");

    if (category) {
      query.where("product.category LIKE :category", {
        category: `%${categories[category]}%`,
      });
    }
    const products = await query.getMany();
    return products;
  }
}
