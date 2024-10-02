import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import * as cookieParser from 'cookie-parser';

configDotenv();

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CLIENT_DOMAIN,
    credentials: true
  });
  app.use(cookieParser());

  await app.listen(PORT);
}
bootstrap();
