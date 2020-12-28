import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @IsNotEmpty()
  public name!: string;

  @Column()
  @IsNotEmpty()
  public age!: number;
}

export default User;
