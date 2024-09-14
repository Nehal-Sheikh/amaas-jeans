import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
	@PrimaryGeneratedColumn({ name: 'id' })
  id: number;

	@Column({ name: 'article_no', type: 'varchar', length: 255, nullable: false })
  articleNumber: string;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ name: 'style', type: 'varchar', length: 255, nullable: true })
  style: string;

  @Column({ name: 'color', type: 'varchar', length: 255, nullable: true })
  color: string;

	@Column({ name: 'category', type: 'varchar', length: 255, nullable: true })
  category: string;

	@Column({ name: 'gender', type: 'varchar', length: 255, nullable: true })
  gender: string;

	@Column({ name: 'price', type: 'int', nullable: true })
  price: number;

  @Column({ name: 'image_url', type: 'varchar', nullable: true })
  imageUrl: string;
}