/// <reference types="es6-promise" />
export interface ITokenOptions {
    secret: string;
    apikey: string;
    expirationMiliseconds?: number;
}
export default class ApiAuth {
    static userToken(user: string | Object, options: ITokenOptions): Promise<string>;
}
