"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseClass {
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
}
exports.default = BaseClass;
