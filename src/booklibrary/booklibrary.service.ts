import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBooklibraryDto } from './dto/booklibrary.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Booklibrary } from './entities/booklibrary.entity';

@Injectable()
export class BooklibraryService {
  constructor(@InjectRepository(Booklibrary) private taskRep: Repository<Booklibrary>) {}

  async create(createBooklibraryDto: CreateBooklibraryDto) {
    try {
      const newBook = await this.taskRep.save({
        title: createBooklibraryDto.title,
        author: createBooklibraryDto.author,
        publishedYear: createBooklibraryDto.publishedYear,
        createdAt: new Date().toISOString(),
      });
      return newBook;
    } catch (err) {
      throw new HttpException('Failed to create book', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return await this.taskRep.find({});
    } catch (err) {
      throw new HttpException('Failed to retrieve books', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string) {
    try {
      const book = await this.taskRep.findOneBy({ id });
      if (!book) {
        throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
      }
      return book;
    } catch (err) {
      throw new HttpException('Failed to retrieve book', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, createBooklibraryDto: CreateBooklibraryDto) {
    try {
      const updateResult = await this.taskRep.update(id, {
        title: createBooklibraryDto.title,
        author: createBooklibraryDto.author,
        publishedYear: createBooklibraryDto.publishedYear,
        updatedAt: new Date().toISOString(),
      });
      if (updateResult.affected === 0) {
        throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
      }
      return await this.findOne(id);
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND) {
        throw err;
      }
      throw new HttpException('Failed to update book', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string) {
    try {
      const deleteResult = await this.taskRep.delete(id);
      if (deleteResult.affected === 0) {
        throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Book deleted successfully' };
    } catch (err) {
      throw new HttpException('Failed to delete book', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
