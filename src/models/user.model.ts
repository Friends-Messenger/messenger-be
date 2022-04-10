import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'fm_user'})
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    @ApiProperty()
    username: string;

    @Column()
    @ApiProperty()
    password: string;

    @Column({ unique: true })
    email: string;
}