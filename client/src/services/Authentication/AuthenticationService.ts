import { User } from "@/domain/User"
import { HttpMethod, HttpRequest, IHttpClient } from "@/infrastructure/http/httpClientContracts"

export type IRegisterOptions = {
    email: string;
    password: string;
}
export type ILoginOptions = {
    email: string;
    password: string;
}
export interface IRegisterService {
    exec : (options: IRegisterOptions)  => Promise<User>
}
export interface ILoginService {
    exec : (options: ILoginOptions)  => Promise<User>
}

export class RegisterService implements IRegisterService {
    constructor(private httpClient : IHttpClient){}

    async exec(options: IRegisterOptions): Promise<User> {
        const httpOptions: HttpRequest<IRegisterOptions>  = {
            url:'/auth/register',
            method: HttpMethod.POST,
            body: options
        }
        const response = await this.httpClient.sendRequest<User, IRegisterOptions>(httpOptions)
        return response
    }
}

export class LoginService implements ILoginService {
    constructor(private httpClient : IHttpClient){}

    async exec(options: ILoginOptions): Promise<User> {
        const httpOptions: HttpRequest<ILoginOptions>  = {
            url:'/auth/login',
            method: HttpMethod.POST,
            body: options
        }
        const response = await this.httpClient.sendRequest<User, ILoginOptions>(httpOptions)
        return response
    }
}