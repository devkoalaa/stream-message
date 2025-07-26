import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PixWebDTO {
    @IsString()
    nome: string;

    @IsString()
    mensagem: string;

    @IsNumber()
    @IsOptional()
    valor: number;
} 