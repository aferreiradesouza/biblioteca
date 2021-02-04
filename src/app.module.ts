import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import * as admin from 'firebase-admin';
import * as serviceAccount from './key-firebase.json'
import { FirebaseService } from './services/firebase.service';
import { AutorModule } from './autores/autor.module';
import { ServicesModule } from './services/services.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { LivrosController } from './livros/livros.controller';

@Module({
  imports: [
    LivrosModule,
    AutorModule,
    AuthModule,
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.cert(serviceAccount as any),
      })
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        LivrosController
      );
  }
}
