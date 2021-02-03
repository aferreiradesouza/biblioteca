import { ApiProperty } from "@nestjs/swagger";

export class EditarAutorDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    nome: string;
}