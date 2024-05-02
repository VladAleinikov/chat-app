import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';

async function bootstrap() {
  configDotenv();
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(PORT);

  await app.listen(PORT);
}
bootstrap();
