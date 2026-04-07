import { Injectable } from '@nestjs/common';

@Injectable()
export class CorridaService {
  getHello(): string {
    return 'Corrida funcionando!';
  }
}