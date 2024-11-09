export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

export type  HttpRequest<TBody> = {
    url: string,
    method: HttpMethod,
    body?: TBody,
    headers?: Record<string, string>
}

export interface IHttpClient {
    sendRequest: <TResponse, TBody=unknown>(request: HttpRequest<TBody>)=>Promise<TResponse>
}