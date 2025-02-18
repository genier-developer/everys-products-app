export type StockItemModel = {
  code: string | null;
  title: string | null;
  manufacturer: string | null;
  description: string | null;
  price: string | null;
  stock: number;
}

export type CollectionOutputModel = {
  totalItems: number;
  items: StockItemModel[];
}