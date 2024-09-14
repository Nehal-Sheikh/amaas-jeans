import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'user_name', type: 'varchar', length: 255, nullable: true })
  userName: string;

  @Column({ name: 'email', type: 'varchar', unique: true, length: 255, nullable: false })
  email: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 10, nullable: true })
  phoneNumber: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
  password: string;
}
