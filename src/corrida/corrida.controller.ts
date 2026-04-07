import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CorridaService } from "./corrida.service";
import { Corrida } from "./corrida.entity";

@Controller("/corridas")
export class CorridaController {

    constructor(private readonly corridaService: CorridaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Corrida[]> {
        return this.corridaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Corrida> {
        return this.corridaService.findById(id);
    }
    
    @Get('/destino/:destino')
    @HttpCode(HttpStatus.OK)
    findByDestino(@Param('destino') destino: string): Promise<Corrida[]> {
        return this.corridaService.findAllByDestino(destino);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() corrida: Corrida): Promise<Corrida> {
        return this.corridaService.create(corrida);
    }

    @Put(":id")
update(@Param("id") id: string, @Body() corrida: Corrida): Promise<Corrida> {
    return this.corridaService.update(Number(id), corrida);
}

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.corridaService.delete(id);
    }
}