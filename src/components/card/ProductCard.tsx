import { Product } from "models/types";
import { ReactNode } from "react";
import { Card } from "react-bootstrap";
export interface ProductCardProps {
  product: Product;
  inputControl?: ReactNode;
}

const ProductCard = (props: ProductCardProps) => {
  const { product, inputControl } = props;

  return (
    <Card style={{ height: "400px", width: "200px", margin: "0.5rem" }}>
      <Card.Img height={"45%"} variant="top" src={product.imgUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="overflow-hidden" style={{ height: "25%" }}>
          {product.description}
        </Card.Text>
        <Card.Text>Price = {product.price}</Card.Text>
        {inputControl}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
