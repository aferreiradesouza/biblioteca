import { Module } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase.service';
import { LivrosController } from './livros.controller';

@Module({
    controllers: [LivrosController],
    providers: [FirebaseService],
})
export class LivrosModule {};