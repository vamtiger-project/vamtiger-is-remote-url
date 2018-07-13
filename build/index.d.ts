export default function (params: Params): Promise<boolean>;
export interface Params {
    url: string;
}
export interface IError extends Error {
    code: string;
}
export declare enum ErrorCode {
    ERR_INVALID_URL = "ERR_INVALID_URL"
}
