import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Corrida } from "./corrida.entity";

@Injectable()
export class CorridaService {
    constructor(
        @InjectRepository(Corrida)
        private corridaRepository: Repository<Corrida>
    ) { }

    async findAll(): Promise<Corrida[]> {
        return await this.corridaRepository.find();
    }

    async findById(id: number): Promise<Corrida> {

        let corrida = await this.corridaRepository.findOne({
            where: {
                id
            }
        });

        if (!corrida)
            throw new HttpException("Corrida não encontrada!", HttpStatus.NOT_FOUND);

        return corrida;
    }

    async create(corrida: Corrida): Promise<Corrida> {

        if (corrida.destinoInicial === corrida.destinoFinal)
            throw new HttpException(
                "O destino inicial não pode ser igual ao destino final!",
                HttpStatus.BAD_REQUEST
            );

        if (corrida.preco < 0)
            throw new HttpException(
                "O preço não pode ser negativo!",
                HttpStatus.BAD_REQUEST
            );

        return await this.corridaRepository.save(corrida);
    }


    async findAllByDestino(destino: string): Promise<Corrida[]> {
    return await this.corridaRepository.find({
        where: [
            { destinoInicial: destino },
            { destinoFinal: destino }
        ]
    });
}

    async update(corrida: Corrida): Promise<Corrida> {

        await this.findById(corrida.id);

        if (corrida.destinoInicial === corrida.destinoFinal)
            throw new HttpException(
                "O destino inicial não pode ser igual ao destino final!",
                HttpStatus.BAD_REQUEST
            );

        if (corrida.preco < 0)
            throw new HttpException(
                "O preço não pode ser negativo!",
                HttpStatus.BAD_REQUEST
            );

        return await this.corridaRepository.save(corrida);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.corridaRepository.delete(id);
    }

}