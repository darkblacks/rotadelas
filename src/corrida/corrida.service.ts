import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Corrida } from "./corrida.entity";

@Injectable()
export class CorridaService {
  constructor(
    @InjectRepository(Corrida)
    private readonly corridaRepository: Repository<Corrida>
  ) {}

  async findAll(): Promise<Corrida[]> {
    return this.corridaRepository.find();
  }

  async findById(id: number): Promise<Corrida> {
    const corrida = await this.corridaRepository.findOne({
      where: { id },
    });

    if (!corrida) {
      throw new HttpException("Corrida não encontrada!", HttpStatus.NOT_FOUND);
    }

    return corrida;
  }

  async findAllByDestino(destino: string): Promise<Corrida[]> {
    return this.corridaRepository.find({
      where: [
        { destinoInicial: destino },
        { destinoFinal: destino },
      ],
    });
  }

  async create(corrida: Corrida): Promise<Corrida> {
    this.validarCorrida(corrida);
    return this.corridaRepository.save(corrida);
  }

  async update(id: number, dadosCorrida: Corrida): Promise<Corrida> {
    const corridaExistente = await this.findById(id);

    this.validarCorrida(dadosCorrida);

    corridaExistente.destinoInicial = dadosCorrida.destinoInicial;
    corridaExistente.destinoFinal = dadosCorrida.destinoFinal;
    corridaExistente.passageira = dadosCorrida.passageira;
    corridaExistente.carro = dadosCorrida.carro;
    corridaExistente.motorista = dadosCorrida.motorista;
    corridaExistente.preco = dadosCorrida.preco;

    return this.corridaRepository.save(corridaExistente);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.corridaRepository.delete(id);
  }

  private validarCorrida(corrida: Corrida): void {
    if (corrida.destinoInicial === corrida.destinoFinal) {
      throw new HttpException(
        "O destino inicial não pode ser igual ao destino final!",
        HttpStatus.BAD_REQUEST
      );
    }

    if (corrida.preco < 0) {
      throw new HttpException(
        "O preço não pode ser negativo!",
        HttpStatus.BAD_REQUEST
      );
    }
  }
}