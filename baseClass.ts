import { Config } from "./interface/config";

class BaseClass {
  consumerKey = "";
  redirectUri = "pocketapp1234:authorizationFinished";
  requestToken = "";
  accessToken = "";

  constructor(config?: Config) {
    if (config) {
      this.consumerKey = config.consumerKey;
      this.redirectUri = config.redirectUri;
    }
  }

  setConsumerKey(consumerKey: string) {
    this.consumerKey = consumerKey;
  }

  setRedirectUri(redirectUri: string) {
    this.redirectUri = redirectUri;
  }

  setRequestToken(requestToken: string) {
    this.requestToken = requestToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}

export default BaseClass;
