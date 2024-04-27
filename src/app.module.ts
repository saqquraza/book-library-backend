import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooklibraryModule } from './booklibrary/booklibrary.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceoption } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => (datasourceoption)
  }),BooklibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
