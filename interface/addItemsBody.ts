export interface AddItemsBody {
  consumer_key: string;
  access_token: string;
  url: string;
  title?: string;
  time?: number;
  tags?: string;
  tweet_id?: string;
}
