import { ApiProperty } from "@nestjs/swagger";

export class CriarLivroDto {
    @ApiProperty()
    nome: string;
}