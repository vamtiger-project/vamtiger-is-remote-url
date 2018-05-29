"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("../..");
const url = require("./mock-data");
describe('vamtiger-is-remote-url should return true for a valid remote url', function () {
    it('http', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteUrl = yield __1.default({
                url: url.http
            });
            chai_1.expect(remoteUrl).to.be.true;
        });
    });
    it('https', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteUrl = yield __1.default({
                url: url.https
            });
            chai_1.expect(remoteUrl).to.be.true;
        });
    });
});
//# sourceMappingURL=index.spec.js.map