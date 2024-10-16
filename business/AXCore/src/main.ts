import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import helmet from '@fastify/helmet';
import fastifyCsrf from '@fastify/csrf-protection';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFile } from 'fs/promises';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // Security configs
  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });
  app.enableCors();
  await app.register(fastifyCsrf);

  // Validate all endpoints
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  const routerGlobalPrefix = '/axcore/api';
  const apiDocPath = `${routerGlobalPrefix}-docs`;
  app.setGlobalPrefix(routerGlobalPrefix);

  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('AXCore API')
    .setDescription('AXCore API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'accessToken',
    );
  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerConfig.build(),
    {
      ignoreGlobalPrefix: false,
    },
  );
  await writeFile('swagger-doc.json', JSON.stringify(swaggerDocument));

  SwaggerModule.setup(apiDocPath, app, swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    jsonDocumentUrl: routerGlobalPrefix + '/doc.json',
    yamlDocumentUrl: routerGlobalPrefix + '/doc.yaml',
  });

  // Start the server
  const host = process.env.HOST || '0.0.0.0';
  const port = process.env.PORT || 2425;
  await app.listen(port, host);
  console.log(`[AXCore] Server running on ${await app.getUrl()}`);
}
bootstrap();

// java -jar openapi-generator-cli-4.0.3.jar generate -i ../swagger-spec.json \
// -g typescript-fetch -o api-specs \
// -t ../swagger-templates/typescript-fetch/ \
// --enable-post-process-file --skip-validate-spec
