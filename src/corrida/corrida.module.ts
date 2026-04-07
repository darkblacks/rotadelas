import { Module } from '@nestjs/common';
import { AppController } from './corrida/app.controller';
import { AppService } from './corrida.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
