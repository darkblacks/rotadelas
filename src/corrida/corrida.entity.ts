import { IsNotEmpty, IsNumber, Min } from "class-validator"
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "tb_corridas"})
export class Corrida { 

    @PrimaryGeneratedColumn ()
    id:number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    destinoInicial: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    destinoFinal: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    passageira: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    carro: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    motorista: string;

    @IsNotEmpty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    preco: number;
}