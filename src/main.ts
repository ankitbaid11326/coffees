import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      /* NOTE => transform will create the insstance for required dto  */

      // forbidNonWhitelisted: true,
      /* NOTE => forbidNonWhitelisted will throw error if some extra properties are sent with request body */
    }),
  );
  await app.listen(3000);
}
bootstrap();
