import About from "pages/about/About";
import Bin from "pages/basket/Basket";
import List from "pages/list/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "components/menu/Menu";
import { CartContextProvider } from "context/CartContextProvider";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/bin" element={<Bin />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
