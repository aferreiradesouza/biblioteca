import { ApiProperty } from "@nestjs/swagger";

export class EditarLivrosDoAutorDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    livros: string[];
}