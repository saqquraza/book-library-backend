import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT||4000
  app.useGlobalPipes(
    new ValidationPipe()
  )
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Shaquelain's Book Library")
    .setDescription("Api for book library")
    .setVersion('1.0')
    .addTag('book library')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  app.enableCors()
  await app.listen(port);
}
bootstrap();
