import { Module } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase.service';
import { ServicesModule } from 'src/services/services.module';
import { AutorController } from './autor.controller';

@Module({
    imports: [ServicesModule],
    controllers: [AutorController],
    providers: [],
})
export class AutorModule {};