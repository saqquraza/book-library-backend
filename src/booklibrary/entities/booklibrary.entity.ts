import { ApiTags } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booklibrary {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({nullable: true})
    author: string;

    @Column({nullable: true})
    publishedYear: number;

    @Column({nullable: true,default: new Date()})
    createdAt: Date;

    @Column({nullable: true})
    updatedAt: Date;
}
