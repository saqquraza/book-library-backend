<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
>>>>>>> 7b3bb4f0833fae21de2e90a91c1734e7e02b9ece
import { BooklibraryService } from './booklibrary.service';
import { CreateBooklibraryDto } from './dto/booklibrary.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Book Library')
@Controller('booklibrary')
export class BooklibraryController {
  constructor(private readonly booklibraryService: BooklibraryService) { }

  @Post()
  async createBook(
    @Body() CreateBooklibraryDto: CreateBooklibraryDto
  ): Promise<{ message: string, status: number }> {
    await this.booklibraryService.create(CreateBooklibraryDto);
    return {
      message: "New Book Created!",
      status: HttpStatus.CREATED
    }
  }

  @Get()
  async findAllBook() {
    return  await this.booklibraryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.booklibraryService.findOne(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string, 
    @Body() createBooklibraryDto: CreateBooklibraryDto
  ): Promise<{ message: string, status: number }> {
    await this.booklibraryService.update(id, createBooklibraryDto);
    return {
      message: "Book Updated!",
      status: HttpStatus.OK
    }
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) :Promise<any>{
    await this.booklibraryService.remove(id);
    return{
      message: "Book Deleted!",
      status: HttpStatus.NO_CONTENT
    }
  }
}
