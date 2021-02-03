import { ApiProperty } from "@nestjs/swagger";

export class InfoLivroDto {
    @ApiProperty({
        description: 'ID do livro',
    })
    id: string;
}