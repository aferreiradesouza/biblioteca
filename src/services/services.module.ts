import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Module({
    controllers: [],
    providers: [FirebaseService],
    exports: [FirebaseService]
})
export class ServicesModule {};