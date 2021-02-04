import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Response } from 'express';
import * as jsontoken from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers['authorization']) { res.status(500).send('Token Obrigatório') }
        const token = req.headers['authorization'].split(' ')[1];
        try {
            jsontoken.verify(token, 'secret');
            next()
        } catch(err) {
            res.status(422).send('Token Expirado');
        }
    }
}