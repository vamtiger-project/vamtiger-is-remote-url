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
const url_1 = require("url");
function default_1(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = params.url;
        const isUrl = yield Promise
            .resolve()
            .then(() => new url_1.URL(url))
            .then(() => true)
            .catch(handleError);
        return isUrl;
    });
}
exports.default = default_1;
function handleError(error) {
    let isUrl;
    if (error.code === ErrorCode.ERR_INVALID_URL)
        isUrl = false;
    if (isUrl !== false)
        throw error;
    return isUrl;
}
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ERR_INVALID_URL"] = "ERR_INVALID_URL";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
//# sourceMappingURL=index.js.map