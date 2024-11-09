export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

export type  HttpRequest<TBody> = {
    endpoint: string,
    method: HttpMethod,
    body?: TBody,
    headers?: Record<string, string>
}

export interface IHttpClient {
    send: <TResponse, TBody=unknown>(request: HttpRequest<TBody>)=>Promise<TResponse>
}