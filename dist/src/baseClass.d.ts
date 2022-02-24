import { Config } from "../interface/config";
declare class BaseClass {
    consumerKey: string;
    redirectUri: string;
    requestToken: string;
    accessToken: string;
    constructor(config?: Config);
    setConsumerKey(consumerKey: string): void;
    setRedirectUri(redirectUri: string): void;
    setRequestToken(requestToken: string): void;
    setAccessToken(accessToken: string): void;
}
export default BaseClass;
