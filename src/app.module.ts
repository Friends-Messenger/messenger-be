import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TestController } from './controllers/test.controller';
import { User } from './models/user.model';
import { UsersModule } from './users/users.module';

const dbEntities = [
  User,
]
@Module({
  imports: [
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-30-67-143.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'lwnzsnomlhxquk',
      password: '136a09b6d51778adffbafb374e825aa5492a5d4e88a85af94c0acb0ce247f5a6',
      database: 'datirgc973hmgr',
      ssl: {
        rejectUnauthorized: false 
      },
      entities: dbEntities,
      synchronize: true,
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
