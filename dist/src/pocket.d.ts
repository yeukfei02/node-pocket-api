import BaseClass from "./baseClass";
import { GetRequestTokenBody } from "../interface/getRequestTokenBody";
import { GetAccessTokenBody } from "../interface/getAccessTokenBody";
import { AddItemsBody } from "../interface/addItemsBody";
import { ModifyItemsBody } from "../interface/modifyItemsBody";
import { RetrieveItemsBody } from "../interface/retrieveItemsBody";
declare class Pocket extends BaseClass {
    getRequestToken(data?: GetRequestTokenBody): Promise<string>;
    getAuthorizeUrl(): Promise<string>;
    getAccessToken(data?: GetAccessTokenBody): Promise<string>;
    addItems(data: AddItemsBody): Promise<any>;
    modifyItems(data: ModifyItemsBody): Promise<any>;
    retrieveItems(data: RetrieveItemsBody): Promise<any>;
}
export default Pocket;
