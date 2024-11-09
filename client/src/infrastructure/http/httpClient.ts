import { AxiosInstance, AxiosResponse } from "axios";
import { HttpRequest, IHttpClient } from "./httpClientContracts";
import { axios } from "@/lib/axios";


export class HttpClient implements IHttpClient{

    constructor(private api: AxiosInstance = axios){}

    async send<TResponse, TBody = unknown>(request: HttpRequest<TBody>): Promise<TResponse>{
    const { url, method, headers, body } = request;
        const response: AxiosResponse<TResponse> = await this.api.request<TResponse>({
            url,
            method,
            headers,
            data: body
        });

        return response.data;
    };


}
