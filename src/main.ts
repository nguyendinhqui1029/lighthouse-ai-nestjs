import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1'); // This sets the prefix for all routes globally, like `/v1/users`
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE', // specify allowed methods
    allowedHeaders: 'Content-Type, Authorization', // specify allowed headers
    credentials: true, // allow cookies or HTTP authentication
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
