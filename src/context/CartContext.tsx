import { CartItem } from "models/types";
import { createContext } from "react";

interface CartContext {
  addItem: (item: CartItem) => void;
  changeQuantity: (id: string, quantity: number) => void;
}

const INITIAL_VALUE = {
  addItem: () => {},
  changeQuantity: () => {},
};

export const CartContext = createContext<CartContext>(INITIAL_VALUE);
