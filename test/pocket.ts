import env from "dotenv";
env.config();

import faker from "faker";
import dayjs from "dayjs";

import { Pocket } from "../index";

let pocket: Pocket;

export const pocketTest = () => {
  describe("Pocket Api", () => {
    beforeAll(() => {
      const config = {
        consumerKey: process.env.POCKET_CONSUMER_KEY
          ? process.env.POCKET_CONSUMER_KEY
          : "",
        redirectUri: process.env.POCKET_REDIRECT_URI
          ? process.env.POCKET_REDIRECT_URI
          : "",
      };
      pocket = new Pocket(config);
    });

    describe("getRequestToken with requestBody", () => {
      it("return success", async () => {
        const data = {
          consumer_key: process.env.POCKET_CONSUMER_KEY
            ? process.env.POCKET_CONSUMER_KEY
            : "",
          redirect_uri: process.env.POCKET_REDIRECT_URI
            ? process.env.POCKET_REDIRECT_URI
            : "",
        };
        const requestToken = await pocket.getRequestToken(data);
        console.log("requestToken = ", requestToken);

        expect(requestToken).toBeDefined();
      });
    });

    describe("getRequestToken without requestBody", () => {
      it("return success", async () => {
        const requestToken = await pocket.getRequestToken();
        console.log("requestToken = ", requestToken);

        expect(requestToken).toBeDefined();
      });
    });

    describe("getAuthorizeUrl", () => {
      it("return success", async () => {
        const authorizeUrl = await pocket.getAuthorizeUrl();
        console.log("authorizeUrl = ", authorizeUrl);

        expect(authorizeUrl).toBeDefined();
      });
    });

    describe("getAccessToken with requestBody", () => {
      it("return success", async () => {
        const data = {
          consumer_key: process.env.POCKET_CONSUMER_KEY
            ? process.env.POCKET_CONSUMER_KEY
            : "",
          code: pocket.requestToken,
        };

        const accessToken = await pocket.getAccessToken(data);
        console.log("accessToken = ", accessToken);

        expect(accessToken).toBeDefined();
      });
    });

    describe("getAccessToken without requestBody", () => {
      it("return success", async () => {
        const accessToken = await pocket.getAccessToken();
        console.log("accessToken = ", accessToken);

        expect(accessToken).toBeDefined();
      });
    });

    describe("addItems", () => {
      it("return success", async () => {
        const data = {
          consumer_key: process.env.POCKET_CONSUMER_KEY
            ? process.env.POCKET_CONSUMER_KEY
            : "",
          access_token: pocket.accessToken,
          url: `http://pocket.co/${faker.lorem.word()}`,
          title: faker.name.title(),
          time: dayjs().unix(),
        };

        const response = await pocket.addItems(data);
        console.log("response = ", response);

        expect(response).toBeDefined();
      });
    });

    describe("modifyItems", () => {
      it("return success", async () => {
        const data = {
          consumer_key: process.env.POCKET_CONSUMER_KEY
            ? process.env.POCKET_CONSUMER_KEY
            : "",
          access_token: pocket.accessToken,
          actions: [
            {
              action: "archive",
              item_id: "229279689",
              time: dayjs().unix(),
            },
          ],
        };

        const response = await pocket.modifyItems(data);
        console.log("response = ", response);

        expect(response).toBeDefined();
      });
    });

    describe("retrieveItems", () => {
      it("return success", async () => {
        const data = {
          consumer_key: process.env.POCKET_CONSUMER_KEY
            ? process.env.POCKET_CONSUMER_KEY
            : "",
          access_token: pocket.accessToken,
        };

        const response = await pocket.retrieveItems(data);
        console.log("response = ", response);

        expect(response).toBeDefined();
      });
    });
  });
};
