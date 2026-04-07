import { Module } from '@nestjs/common';
import { CorridaModule } from './corrida/corrida.module';

@Module({
  imports: [CorridaModule],
})
export class AppModule {}