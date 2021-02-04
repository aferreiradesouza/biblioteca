import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as jsontoken from 'jsonwebtoken';

@Controller('auth')
@ApiTags('Autenticação')
export class AuthController {
    constructor() { }

    @Post('autenticar')
    login() {
        return 'login'
    }

    @Get('gerarToken')
    gerarToken() {
        return jsontoken.sign({
            data: JSON.stringify({
                'nome': 'Arthur',
                'nascimento': '1997-11-20',
                'cpf': '16478534782'
            })
        }, 'secret', { expiresIn: '5m' })
    }

}