import ShopCard from "components/card/ShopCard";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>

      <main>
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <ShopCard title="Title 1" description="Description" />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;
