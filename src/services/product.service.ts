import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "src/dto/create-product.dto";
import { Product } from "src/models/product.entity";
import { Repository } from "typeorm";
import { NotificationService } from "./notification.service";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private notificationService: NotificationService
  ) {}

	async create(createProductDto: CreateProductDto) {
    console.log('CreateProductDto:', createProductDto); 
    const product = this.productRepository.create(createProductDto);

    const savedProduct = await this.productRepository.save(product);

    this.notificationService.productAdded(savedProduct.name);
    return savedProduct;
  }

  async fileUpload(filePath) {
    return filePath;
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: Partial<CreateProductDto>) {
    await this.productRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.productRepository.delete(id);
  }

}