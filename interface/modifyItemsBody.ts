export interface ModifyItemsBody {
  consumer_key: string;
  access_token: string;
  actions: actions[];
}

export interface actions {
  action: string;
  item_id: string;
  time?: number;
  ref_id?: number;
  url?: string;
  title?: string;
  tags?: string;
  tag?: string;
  old_tag?: string;
  new_tag?: string;
}
