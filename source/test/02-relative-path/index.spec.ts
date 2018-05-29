import { expect } from 'chai';
import isRemoteUrl from '../..';
import * as url from './mock-data';

describe('vamtiger-is-remote-url should return false for an invalid remote url', function () {
    it('relative path', async function () {
        const remoteUrl = await isRemoteUrl({ 
            url: url.relativePath
        });

        expect(remoteUrl).to.be.false;
    });

    it('relative file path', async function () {
        const remoteUrl = await isRemoteUrl({ 
            url: url.relativeFilePath
        });

        expect(remoteUrl).to.be.false;
    });
})