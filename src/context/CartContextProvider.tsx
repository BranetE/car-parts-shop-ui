import { CartContext } from "context/CartContext";
import useLocalStorage from "hooks/useLocalStorage";
import { CartItem } from "models/types";
import { ReactNode, useState, useEffect, useMemo } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

// const getLocalStorage = () => {
//   const items = localStorage.getItem("items");
//   if (items) {
//     return JSON.parse(items);
//   } else {
//     return [];
//   }
// };

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const { read, write } = useLocalStorage("product");
  const [items, setItems] = useState<CartItem[]>(read);

  const addItem = (item: CartItem) => {
    alert(`${item.item.title} was added`);
    setItems((prev: CartItem[]) => [...prev, item]);
  };

  const changeQuantity = (id: string, quantity: number) => {
    const item = items.find((e) => e.item.id == id);

    if (item) {
      if (quantity == 0) {
        setItems((prev) => prev.splice(items.indexOf(item), 1));
      }
      item.quantity = quantity;
      setItems((prev: CartItem[]) => {
        return prev.map((i) => (i.item.id == id ? item : i));
      });
    }
  };

  useEffect(() => {
    write(items);
  }, [addItem, changeQuantity]);

  const contextValue = useMemo(() => ({ addItem, changeQuantity }), []);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
