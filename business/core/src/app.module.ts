import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import {
  AcceptLanguageResolver,
  QueryResolver,
  HeaderResolver,
  CookieResolver,
  I18nModule,
} from 'nestjs-i18n';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessModule } from './business/business.module';
import { CustomerModule } from './customer/customer.module';
import { AudienceModule } from './audience/audience.module';
import { CompetitorModule } from './competitor/competitor.module';
import { LeadModule } from './lead/lead.module';
import { AboutModule } from './about/about.module';
import { KeywordModule } from './keyword/keyword.module';
import { MediaModule } from './media/media.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PostModule } from './post/post.module';
import { NewsModule } from './news/news.module';
import { PartyModule } from './party/party.module';
import { ContentModule } from './content/content.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { BaseModule } from './base/base.module';

@Module({
  imports: [
    AboutModule,
    AudienceModule,
    AuthModule,
    BusinessModule,
    CompetitorModule,
    ContentModule,
    CustomerModule,
    KeywordModule,
    LeadModule,
    MediaModule,
    NewsModule,
    PartyModule,
    PortfolioModule,
    PostModule,

    BaseModule,

    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) =>
    //     configService.get('database'),
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          url: 'postgresql://postgres:postgres@127.0.0.1:5432/business-book-core',
          synchronize: true,
          host: 'localhost',
          autoLoadEntities: true,
          autoLoadModels: true,
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: '/static',
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '..', '/i18n/'),
        watch: true,
      },
      resolvers: [
        new QueryResolver(['lang', 'l']),
        new HeaderResolver(['x-custom-lang']),
        new CookieResolver(),
        AcceptLanguageResolver,
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
