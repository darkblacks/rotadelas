import { Module } from '@nestjs/common';
import { CorridaModule } from './corrida/corrida.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Corrida } from './corrida/corrida.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'lf@gmail27',
      database: 'db_blogpessoal',
      entities: [Corrida],
      synchronize: true
    }),
CorridaModule]
})
export class AppModule {}