import { Module } from '@nestjs/common';
import { BooklibraryService } from './booklibrary.service';
import { BooklibraryController } from './booklibrary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booklibrary } from './entities/booklibrary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booklibrary])],
  controllers: [BooklibraryController],
  providers: [BooklibraryService],
})
export class BooklibraryModule {}
