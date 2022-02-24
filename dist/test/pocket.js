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
exports.pocketTest = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const faker_1 = __importDefault(require("faker"));
const dayjs_1 = __importDefault(require("dayjs"));
const index_1 = require("../index");
let pocket;
const pocketTest = () => {
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
            pocket = new index_1.Pocket(config);
        });
        describe("getRequestToken with requestBody", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const data = {
                    consumer_key: process.env.POCKET_CONSUMER_KEY
                        ? process.env.POCKET_CONSUMER_KEY
                        : "",
                    redirect_uri: process.env.POCKET_REDIRECT_URI
                        ? process.env.POCKET_REDIRECT_URI
                        : "",
                };
                const requestToken = yield pocket.getRequestToken(data);
                console.log("requestToken = ", requestToken);
                expect(requestToken).toBeDefined();
            }));
        });
        describe("getRequestToken without requestBody", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const requestToken = yield pocket.getRequestToken();
                console.log("requestToken = ", requestToken);
                expect(requestToken).toBeDefined();
            }));
        });
        describe("getAuthorizeUrl", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const authorizeUrl = yield pocket.getAuthorizeUrl();
                console.log("authorizeUrl = ", authorizeUrl);
                expect(authorizeUrl).toBeDefined();
            }));
        });
        describe("getAccessToken with requestBody", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const data = {
                    consumer_key: process.env.POCKET_CONSUMER_KEY
                        ? process.env.POCKET_CONSUMER_KEY
                        : "",
                    code: pocket.requestToken,
                };
                const accessToken = yield pocket.getAccessToken(data);
                console.log("accessToken = ", accessToken);
                expect(accessToken).toBeDefined();
            }));
        });
        describe("getAccessToken without requestBody", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const accessToken = yield pocket.getAccessToken();
                console.log("accessToken = ", accessToken);
                expect(accessToken).toBeDefined();
            }));
        });
        describe("addItems", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const data = {
                    consumer_key: process.env.POCKET_CONSUMER_KEY
                        ? process.env.POCKET_CONSUMER_KEY
                        : "",
                    access_token: pocket.accessToken,
                    url: `http://pocket.co/${faker_1.default.lorem.word()}`,
                    title: faker_1.default.name.title(),
                    time: (0, dayjs_1.default)().unix(),
                };
                const response = yield pocket.addItems(data);
                console.log("response = ", response);
                expect(response).toBeDefined();
            }));
        });
        describe("modifyItems", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const data = {
                    consumer_key: process.env.POCKET_CONSUMER_KEY
                        ? process.env.POCKET_CONSUMER_KEY
                        : "",
                    access_token: pocket.accessToken,
                    actions: [
                        {
                            action: "archive",
                            item_id: "229279689",
                            time: (0, dayjs_1.default)().unix(),
                        },
                    ],
                };
                const response = yield pocket.modifyItems(data);
                console.log("response = ", response);
                expect(response).toBeDefined();
            }));
        });
        describe("retrieveItems", () => {
            it("return success", () => __awaiter(void 0, void 0, void 0, function* () {
                const data = {
                    consumer_key: process.env.POCKET_CONSUMER_KEY
                        ? process.env.POCKET_CONSUMER_KEY
                        : "",
                    access_token: pocket.accessToken,
                };
                const response = yield pocket.retrieveItems(data);
                console.log("response = ", response);
                expect(response).toBeDefined();
            }));
        });
    });
};
exports.pocketTest = pocketTest;
