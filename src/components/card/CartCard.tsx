import ProductCard, { ProductCardProps } from "./ProductCard";

const CartCard = (props: ProductCardProps) => {
  const { imgUrl, title, description, price } = props;

  return (
    <ProductCard
      title={title}
      imgUrl={imgUrl}
      description={description}
      price={price}
    />
  );
};

export default CartCard;
