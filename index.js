const axios = require("axios");
const { getRootUrl } = require("./helpers/helpers");

const rootUrl = getRootUrl();

class Pocket {
  consumerKey = "";
  redirectUri = "pocketapp1234:authorizationFinished";
  requestToken = "";
  accessToken = "";

  constructor(config) {
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

  async getRequestToken(data) {
    let result = "";

    let response = null;
    try {
      if (data) {
        response = await axios.post(`${rootUrl}/oauth/request`, data, {
          headers: {
            "Content-Type": "application/json",
            "X-Accept": "application/json",
          },
        });
      } else {
        const requestBody = {
          consumer_key: this.consumerKey,
          redirect_uri: this.redirectUri,
        };
        response = await axios.post(`${rootUrl}/oauth/request`, requestBody, {
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
    } catch (e) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async getAccessToken(data) {
    let result = "";

    let response = null;
    try {
      if (data) {
        response = await axios.post(`${rootUrl}/oauth/authorize`, data, {
          headers: {
            "Content-Type": "application/json",
            "X-Accept": "application/json",
          },
        });
      } else {
        const requestBody = {
          consumer_key: this.consumerKey,
          code: this.requestToken,
        };
        response = await axios.post(`${rootUrl}/oauth/authorize`, requestBody, {
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
    } catch (e) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async addItems(data) {
    let result = "";

    try {
      const response = await axios.post(`${rootUrl}/add`, data, {
        headers: {
          "Content-Type": "application/json",
          "X-Accept": "application/json",
        },
      });
      if (response && response.data) {
        result = response.data;
      }
    } catch (e) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async modifyItems(data) {
    let result = "";

    try {
      const response = await axios.post(`${rootUrl}/send`, data, {
        headers: {
          "Content-Type": "application/json",
          "X-Accept": "application/json",
        },
      });
      if (response && response.data) {
        result = response.data;
      }
    } catch (e) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async retrieveItems(data) {
    let result = "";

    try {
      const response = await axios.post(`${rootUrl}/get`, data, {
        headers: {
          "Content-Type": "application/json",
          "X-Accept": "application/json",
        },
      });
      if (response && response.data) {
        result = response.data;
      }
    } catch (e) {
      console.log("error = ", e.message);
    }

    return result;
  }
}

module.exports = Pocket;
