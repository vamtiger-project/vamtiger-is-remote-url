import { expect } from 'chai';
import isRemoteUrl from '../..';
import * as url from './mock-data';

describe('vamtiger-is-remote-url should return true for a valid remote url', function () {
    it('http', async function () {
        const remoteUrl = await isRemoteUrl({ 
            url: url.http
        });

        expect(remoteUrl).to.be.true;
    });

    it('https', async function () {
        const remoteUrl = await isRemoteUrl({ 
            url: url.https
        });

        expect(remoteUrl).to.be.true;
    });
})