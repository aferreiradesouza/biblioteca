import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FirebaseService } from 'src/services/firebase.service';
import { EditarAutorDto } from './dto/editar-autor.dto';
import { CriarAutorDto } from './dto/criar-autor.dto';
import { InfoAutorDto } from './dto/info-autor.dto';
import { RemoverAutorDto } from './dto/remover-autor.dto';
import { EditarLivrosDoAutorDto } from './dto/editar-livro-do-autor.dto';

@Controller('autor')
@ApiTags('Autores')
export class AutorController {
    constructor(private firebaseService: FirebaseService){}

    @Get()
    @ApiOperation({ summary: 'Obter autores' })
    @ApiResponse({ status: 404, description: 'Não há autores' })
    async getList() {
        return await this.firebaseService.getListDocument('autores');
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter autor específico' })
    @ApiResponse({ status: 404, description: 'autor não encontrado' })
    async getLivro(@Param() params: InfoAutorDto) {
        return await this.firebaseService.getDocument('autores', params.id);
    }

    @Put('editarLivro')
    @ApiOperation({ summary: 'Editar livros do autor' })
    async addLivroAoAutor(@Body() body: EditarLivrosDoAutorDto) {
        try {
            const response = await this.firebaseService.getDocument('autores', body.id) as { nome: string, id: string };
            return await this.firebaseService.updateDocument('autores', body.id, {nome: response.nome, livros: body.livros})
        } catch (err) {
            return err;
        }
    }

    @Post()
    @ApiOperation({ summary: 'Criar autor' })
    async criarLivro(@Body() body: CriarAutorDto) {
        return await this.firebaseService.createDocument('autores', body);
    }

    @Put()
    @ApiOperation({ summary: 'Editar autor' })
    async editarLivro(@Body() body: EditarAutorDto) {
        return await this.firebaseService.updateDocument('autores', body.id, body);
    }

    @Delete()
    @ApiOperation({ summary: 'Remover autor' })
    async removerLivro(@Query() params: RemoverAutorDto) {
        return await this.firebaseService.deleteDocument('autores', params.id);
    }
}