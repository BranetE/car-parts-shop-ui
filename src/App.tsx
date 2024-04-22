import ShopCard from "components/card/ShopCard";
import Menu from "components/menu/Menu";
const itemsList = [
  {
    id: 1,
    title: "Banana",
    description: "A curved, creamy fruit with a subtly sweet flavor.",
    imgUrl: "/banana.jpg",
    price: 40,
  },
  {
    id: 2,
    title: "Strawberry",
    description: "Juicy, red berries bursting with vibrant sweetness.",
    imgUrl: "/strawberry.jpg",
    price: 20,
  },
  {
    id: 3,
    title: "Grape",
    description:
      "Small, round fruit typically found in clusters, offering a juicy burst of sweetness.",
    imgUrl: "/grape.jpg",
    price: 30,
  },
  {
    id: 4,
    title: "Kiwi",
    description: "Small, fuzzy fruits with tangy-sweet flesh and edible seeds.",
    imgUrl: "/kiwi.jpg",
    price: 50,
  },
];

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>

      <main>
        <section className="container">
          <div className="d-flex flex-row flex-wrap">
            {itemsList.map((e) => (
              <ShopCard
                key={e.id}
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
}

export default App;
