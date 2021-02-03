import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import * as admin from 'firebase-admin';
import * as serviceAccount from './key-firebase.json'
import { FirebaseService } from './services/firebase.service';
import { AutorModule } from './autores/autor.module';

@Module({
  imports: [
    LivrosModule,
    AutorModule,
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.cert(serviceAccount as any),
      })
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
