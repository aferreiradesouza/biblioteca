import { Module } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase.service';
import { AutorController } from './autor.controller';

@Module({
    controllers: [AutorController],
    providers: [FirebaseService],
})
export class AutorModule {};