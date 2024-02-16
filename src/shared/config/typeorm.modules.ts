import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from 'src/datasource/typeorm.config.service';


@Module({
 providers: [TypeOrmConfigService],
 exports: [TypeOrmConfigService],
})
export class TypeOrmConfigModule {}
