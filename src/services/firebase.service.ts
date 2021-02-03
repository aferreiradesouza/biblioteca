import { FirebaseStorageService } from '@aginix/nestjs-firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
    constructor(private db: FirebaseStorageService) { }

    async getDocument(collection: string, doc: string): Promise<any> {
        return await new Promise(async (resolve, reject) => {
            try {
                const document = this.db.app.firestore().collection(collection).doc(doc);
                let item = await document.get();
                resolve({
                    id: doc,
                    ...item.data()
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    async getListDocument(collection: string): Promise<any> {
        return await new Promise(async (resolve, reject) => {
            try {
                const query = this.db.app.firestore().collection(collection);
                let response = await query.get();
                resolve(response.docs.map(e => {
                    return {
                        id: e.id,
                        ...e.data()
                    }
                }))
            } catch (err) {
                reject(err)
            }
        })
    }

    async updateDocument(collection: string, id: string, data: any): Promise<any> {
        return await new Promise(async (resolve, reject) => {
            try {
                const query = this.db.app.firestore().collection(collection);
                await query.doc(id).update(data);
                resolve(id)
            } catch (err) {
                reject(err)
            }
        })
    }

    async deleteDocument(collection: string, id: string): Promise<any> {
        return await new Promise(async (resolve, reject) => {
            try {
                const query = this.db.app.firestore().collection(collection);
                await query.doc(id).delete();
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }

    async createDocument(collection: string, data: any): Promise<any> {
        return await new Promise(async (resolve, reject) => {
            try {
                const query = this.db.app.firestore().collection(collection);
                const response = await query.add(data);
                resolve(response.id)
            } catch (err) {
                reject(err)
            }
        })
    }
}