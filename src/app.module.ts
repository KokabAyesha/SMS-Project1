import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { databaseConfig } from './config/database.config';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './datasource/typeorm.config.service';
import { DataSource } from 'typeorm';
import { TypeOrmConfigModule } from './shared/config/typeorm.modules';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      inject: [TypeOrmConfigService],
 
 
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }
 
 
        return new DataSource(options);
      },
    }),
    CoursesModule,
    StudentsModule,
    TeachersModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
 })
 export class AppModule {}
 
 
 
