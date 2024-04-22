import { Card, Button } from "react-bootstrap";

interface ShopCardProps {
  imgUrl: string;
  title: string;
  description: string;
  price: number;
}

const ShopCard = (props: ShopCardProps) => {
  const { imgUrl, title, description, price } = props;

  const addItem = () => {
    alert(`${title} was added`);
  };

  return (
    <Card style={{ height: "600px", width: "300px" }}>
      <Card.Img variant="top" src={imgUrl} height={"300px"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price = {price}</Card.Text>

        <Button variant="outline-secondary" onClick={addItem}>
          Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
