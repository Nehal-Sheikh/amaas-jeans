import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	articleNumber: string;

	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	style: string;

	@IsString()
	color: string;

	@IsString()
	category: string;

	@IsString()
	gender: string;

	@IsNumber()
	price: number;

	@IsString()
	imageUrl: string;
}