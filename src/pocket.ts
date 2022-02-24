import axios from "axios";
import BaseClass from "./baseClass";
import { getRootUrl } from "../helpers/helpers";
import { GetRequestTokenBody } from "../interface/getRequestTokenBody";
import { GetAccessTokenBody } from "../interface/getAccessTokenBody";
import { AddItemsBody } from "../interface/addItemsBody";
import { ModifyItemsBody } from "../interface/modifyItemsBody";
import { RetrieveItemsBody } from "../interface/retrieveItemsBody";

const rootUrl = getRootUrl();

class Pocket extends BaseClass {
  async getRequestToken(data?: GetRequestTokenBody) {
    let result = "";

    let response = null;
    try {
      if (data) {
        response = await axios.post(`${rootUrl}/oauth/request`, data, {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
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
            "Content-Type": "application/json; charset=UTF-8",
            "X-Accept": "application/json",
          },
        });
      }

      if (response && response.data) {
        result = response.data.code;
        this.requestToken = response.data.code;
      }
    } catch (e: any) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async getAuthorizeUrl() {
    let authorizeUrl = "";

    if (this.requestToken && this.redirectUri) {
      authorizeUrl = `https://getpocket.com/auth/authorize?request_token=${this.requestToken}&redirect_uri=${this.redirectUri}`;
    }

    return authorizeUrl;
  }

  async getAccessToken(data?: GetAccessTokenBody) {
    let result = "";

    let response = null;
    try {
      if (data) {
        response = await axios.post(`${rootUrl}/oauth/authorize`, data, {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
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
            "Content-Type": "application/json; charset=UTF-8",
            "X-Accept": "application/json",
          },
        });
      }

      if (response && response.data) {
        result = response.data.access_token;
        this.accessToken = response.data.access_token;
      }
    } catch (e: any) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async addItems(data: AddItemsBody) {
    let result = null;

    try {
      const response = await axios.post(`${rootUrl}/add`, data, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-Accept": "application/json",
        },
      });
      if (response && response.data) {
        result = response.data;
      }
    } catch (e: any) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async modifyItems(data: ModifyItemsBody) {
    let result = null;

    try {
      const response = await axios.post(`${rootUrl}/send`, data, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-Accept": "application/json",
        },
      });
      if (response && response.data) {
        result = response.data;
      }
    } catch (e: any) {
      console.log("error = ", e.message);
    }

    return result;
  }

  async retrieveItems(data: RetrieveItemsBody) {
    let result = null;

    try {
      const response = await axios.post(`${rootUrl}/get`, data, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-Accept": "application/json",
        },
      });
      if (response && response.data) {
        result = response.data;
      }
    } catch (e: any) {
      console.log("error = ", e.message);
    }

    return result;
  }
}

export default Pocket;
