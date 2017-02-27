import * as jwt from 'jsonwebtoken';

export interface ITokenOptions {
    secret: string;
    apikey: string;
    expirationInSeconds?: number;
}

export default class ApiAuth {
    static userToken(user: string | Object, options: ITokenOptions): Promise<string> {
        return new Promise((res, rej) => {

            var pl = typeof user == 'string' ? {
                user: user
            } : user

            jwt.sign({
                data: pl
            }, options.secret, {
                    algorithm: 'HS256',
                    expiresIn: options.expirationInSeconds ||  60 * 60 * 12,
                    issuer: 'api.jdash.io',
                    subject: options.apikey
                }, (err, token) => {
                    err ? rej(err) : res(token)
                })
        })
    }
}
