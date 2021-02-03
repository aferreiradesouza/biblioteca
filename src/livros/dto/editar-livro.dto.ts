import { ApiProperty } from "@nestjs/swagger";

export class EditarLivroDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    nome: string;
}