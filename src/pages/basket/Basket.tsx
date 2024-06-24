import CartCard from "components/card/CartCard";
import { ProductCardProps } from "components/card/ProductCard";
import { useEffect, useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

const Basket = (): JSX.Element => {
  const [selectedProducts, setSelectedProducts] = useState<ProductCardProps[]>(
    []
  );

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      setSelectedProducts(JSON.parse(items));
    }
  }, []);

  return (
    <section className="app">
      <main>
        <section className="container">
          <div className="d-flex flex-row flex-wrap">
            {selectedProducts.map((e) => (
              <CartCard
              title={e.title}
              description={e.description}
              imgUrl={e.imgUrl}
              price={e.price}
              />
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Basket;
