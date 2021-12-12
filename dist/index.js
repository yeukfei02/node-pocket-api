"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./helpers/helpers");
const rootUrl = (0, helpers_1.getRootUrl)();
class Pocket {
    constructor(config) {
        this.consumerKey = "";
        this.redirectUri = "pocketapp1234:authorizationFinished";
        this.requestToken = "";
        this.accessToken = "";
        if (config) {
            this.consumerKey = config.consumerKey;
            this.redirectUri = config.redirectUri;
        }
    }
    setConsumerKey(consumerKey) {
        this.consumerKey = consumerKey;
    }
    setRedirectUri(redirectUri) {
        this.redirectUri = redirectUri;
    }
    setRequestToken(requestToken) {
        this.requestToken = requestToken;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    getRequestToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = "";
            let response = null;
            try {
                if (data) {
                    response = yield axios_1.default.post(`${rootUrl}/oauth/request`, data, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-Accept": "application/json",
                        },
                    });
                }
                else {
                    const requestBody = {
                        consumer_key: this.consumerKey,
                        redirect_uri: this.redirectUri,
                    };
                    response = yield axios_1.default.post(`${rootUrl}/oauth/request`, requestBody, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-Accept": "application/json",
                        },
                    });
                }
                if (response && response.data) {
                    result = response.data.code;
                    this.requestToken = response.data.code;
                }
            }
            catch (e) {
                console.log("error = ", e.message);
            }
            return result;
        });
    }
    getAccessToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = "";
            let response = null;
            try {
                if (data) {
                    response = yield axios_1.default.post(`${rootUrl}/oauth/authorize`, data, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-Accept": "application/json",
                        },
                    });
                }
                else {
                    const requestBody = {
                        consumer_key: this.consumerKey,
                        code: this.requestToken,
                    };
                    response = yield axios_1.default.post(`${rootUrl}/oauth/authorize`, requestBody, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-Accept": "application/json",
                        },
                    });
                }
                if (response && response.data) {
                    result = response.data.access_token;
                    this.accessToken = response.data.access_token;
                }
            }
            catch (e) {
                console.log("error = ", e.message);
            }
            return result;
        });
    }
    addItems(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = "";
            try {
                const response = yield axios_1.default.post(`${rootUrl}/add`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Accept": "application/json",
                    },
                });
                if (response && response.data) {
                    result = response.data;
                }
            }
            catch (e) {
                console.log("error = ", e.message);
            }
            return result;
        });
    }
    modifyItems(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = "";
            try {
                const response = yield axios_1.default.post(`${rootUrl}/send`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Accept": "application/json",
                    },
                });
                if (response && response.data) {
                    result = response.data;
                }
            }
            catch (e) {
                console.log("error = ", e.message);
            }
            return result;
        });
    }
    retrieveItems(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = "";
            try {
                const response = yield axios_1.default.post(`${rootUrl}/get`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Accept": "application/json",
                    },
                });
                if (response && response.data) {
                    result = response.data;
                }
            }
            catch (e) {
                console.log("error = ", e.message);
            }
            return result;
        });
    }
}
exports.default = Pocket;
