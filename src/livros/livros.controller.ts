import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FirebaseService } from 'src/services/firebase.service';
import { EditarLivroDto } from './dto/editar-livro.dto';
import { CriarLivroDto } from './dto/criar-livro.dto';
import { InfoLivroDto } from './dto/info-livro.dto';
import { RemoverLivroDto } from './dto/remover-livro.dto';

@Controller('livros')
@ApiTags('Livros')
export class LivrosController {
    constructor(private firebaseService: FirebaseService){}

    @Get()
    @ApiOperation({ summary: 'Obter livros' })
    @ApiBearerAuth()
    @ApiResponse({ status: 404, description: 'Não há livros' })
    async getList() {
        return await this.firebaseService.getListDocument('livros');
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter livro específico' })
    @ApiResponse({ status: 404, description: 'livro não encontrado' })
    async getLivro(@Param() params: InfoLivroDto) {
        return await this.firebaseService.getDocument('livros', params.id);
    }

    @Post()
    @ApiOperation({ summary: 'Criar livro' })
    async criarLivro(@Body() body: CriarLivroDto) {
        return await this.firebaseService.createDocument('livros', body);
    }

    @Put()
    @ApiOperation({ summary: 'Editar livro' })
    async editarLivro(@Body() body: EditarLivroDto) {
        return await this.firebaseService.updateDocument('livros', body.id, body);
    }

    @Delete()
    @ApiOperation({ summary: 'Remover livro' })
    async removerLivro(@Query() params: RemoverLivroDto) {
        return await this.firebaseService.deleteDocument('livros', params.id);
    }
}