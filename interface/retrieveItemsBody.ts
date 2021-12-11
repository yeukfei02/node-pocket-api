export interface RetrieveItemsBody {
  consumer_key: string;
  access_token: string;
  state?: string;
  favorite?: string;
  tag?: string;
  contentType?: string;
  sort?: string;
  detailType?: string;
  search?: string;
  domain?: string;
  since?: number;
  count?: number;
  offset?: number;
}
