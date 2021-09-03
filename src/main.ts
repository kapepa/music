import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import bodyParser from "body-parser";

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(5000, () => console.log(`server is runing on port ${PORT}`));
  } catch (e) {
    console.log(e.name)
  }
}

bootstrap();
