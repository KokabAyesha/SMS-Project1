import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
 constructor(private configService: ConfigService) {}


 createTypeOrmOptions(): TypeOrmModuleOptions {
   return {
     type: 'postgres',
     host: this.configService.get('DATABASE_HOST'),
     port: parseInt(this.configService.get('DATABASE_PORT'), 10),
     username: this.configService.get('DATABASE_USER'),
     password: this.configService.get('DATABASE_PASSWORD'),
     database: this.configService.get('DATABASE_NAME'),
     synchronize: this.configService.get('SYNCHRONIZATION'),
     entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
   };
 }
}
