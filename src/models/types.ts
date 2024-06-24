export interface Product {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  price: number;
}

export interface CartItem {
  item: Product;
  quantity: number;
}
