import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { diskStorage } from 'multer';
import { FilesInterceptor } from "@nestjs/platform-express";
import { CreateProductDto } from "src/dto/create-product.dto";
import { ProductService } from "src/services/product.service";
import { extname } from "path";

@Controller('products')
export class productController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
	@Get()
  async findAll() {
    return this.productService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(FilesInterceptor('file', Infinity, {
    storage: diskStorage({
      destination: './public/uploads',
      filename: (req, file, cb) => {
        const randomName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`;
        cb(null, randomName);
      },
    }),
  }))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    const filePaths = files.map(file => `/uploads/${file.filename}`);

    console.log(filePaths)
    return this.productService.fileUpload(filePaths);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: Partial<CreateProductDto>) {
    return this.productService.update(id, updateProductDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }

}