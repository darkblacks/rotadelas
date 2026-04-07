import { Controller, Get } from '@nestjs/common';
import { CorridaService } from './corrida.service';

@Controller('corrida')
export class CorridaController {
  constructor(private readonly corridaService: CorridaService) {}

  @Get()
  getHello(): string {
    return this.corridaService.getHello();
  }
}