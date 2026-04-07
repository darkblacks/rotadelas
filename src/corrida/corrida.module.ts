import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorridaController } from './corrida.controller';
import { CorridaService } from './corrida.service';
import { Corrida } from './corrida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Corrida])],
  controllers: [CorridaController],
  providers: [CorridaService],
})
export class CorridaModule {}