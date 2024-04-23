import About from "components/about/About";
import Bin from "components/bin/Bin";
import List from "components/list/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "components/menu/Menu";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/bin" element={<Bin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
