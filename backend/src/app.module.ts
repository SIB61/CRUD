import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog/entities/blog.entity';
import { UserEntity } from './user/entities/user.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
@Module({
  imports: [
    UserModule,
    AuthModule,
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'nest_crud',
      entities: [UserEntity, BlogEntity],
      synchronize: true,
    }),
    CacheModule.register({
      max: 100,
      isGlobal: true,
    }),
    /*    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'nest_crud',
      entities: [BlogEntity, UserEntity],
      synchronize: true,
    }), */
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
