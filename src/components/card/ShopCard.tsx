import { Card, Button } from "react-bootstrap";

interface ShopCardProps {
  title: string;
  description: string;
}

const ShopCard = (props: ShopCardProps) => {
  const { title, description } = props;

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
