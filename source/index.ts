import { URL } from 'url';

export default async function (params: Params) {
    const url = params.url;
    const isUrl = await Promise
        .resolve()
        .then(() => new URL(url))
        .then(() => true)
        .catch(handleError);

    return isUrl
}

function handleError(error: IError) {
    let isUrl;

    if (error.code === ErrorCode.ERR_INVALID_URL)
        isUrl = false;

    if (isUrl !== false)
        throw error;
    
    return isUrl
}

export interface Params {
    url: string;
}

export interface IError extends Error {
    code: string;
}

export enum ErrorCode {
    ERR_INVALID_URL = 'ERR_INVALID_URL'
}