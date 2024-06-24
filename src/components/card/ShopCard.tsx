// import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { useCart } from "hooks/useCart";

// const getLocalStorage = () => {
//   const items = localStorage.getItem("items");
//   if (items) {
//     return JSON.parse(items);
//   } else {
//     return [];
//   }
// };

const ShopCard = (props: ProductCardProps) => {
  const { product } = props;
  const { addItem } = useCart();
  // const [selectedProducts, setSelectedProducts] = useState<ProductCardProps[]>(
  //   getLocalStorage()
  // );

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(selectedProducts));
  // }, [selectedProducts]);

  // const addItem = () => {
  //   alert(`${title} was added`);
  //   const items = localStorage.getItem("items");
  //   if (items) {
  //     setSelectedProducts(JSON.parse(items));
  //   }
  //   setSelectedProducts((prev: ProductCardProps[]) => [...prev, props]);
  // };

  const addButton = (
    <Button
      variant="outline-secondary"
      onClick={() => addItem({ item: product, quantity: 1 })}
    >
      Add
    </Button>
  );

  return <ProductCard product={product} inputControl={addButton} />;
};

export default ShopCard;
