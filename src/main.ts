import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('Cinema')
        .setDescription('')
        .setVersion('1.0')
        .addTag('cinema')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}
bootstrap();
