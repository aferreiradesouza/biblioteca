import { ApiProperty } from "@nestjs/swagger";

export class RemoverLivroDto {
    @ApiProperty({
        description: 'ID do livro',
    })
    id: string;
}