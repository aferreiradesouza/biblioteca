import { ApiProperty } from "@nestjs/swagger";

export class CriarAutorDto {
    @ApiProperty()
    nome: string;
}