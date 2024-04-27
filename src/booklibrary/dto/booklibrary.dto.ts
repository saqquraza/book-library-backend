import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBooklibraryDto {

    @ApiProperty({ example: "React", description: 'The title of the book' })
    @IsString()
    title: string;

    @ApiProperty({ example: "Aman", description: 'The author of the book' })
    @IsString()
    author: string;

    @ApiProperty({ example: 2024, description: 'The publishedYear of the book' })
    @IsOptional()
    @IsNumber()
    publishedYear: number;
}
