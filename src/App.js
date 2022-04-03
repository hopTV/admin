// import "./App.css";
import Navbar from "./components/header/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import Banner from "./components/banner/Banner";
import Admin from "./admin/components/Admin";
import { useState } from "react";

function App() {
  // const [isHeader, setIsHeader] = useState(false);

  const Main = () => {
    return (
      <>
        <Banner />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
          {/* <Route exact path="/admin" component={Admin} /> */}
          {/* {/* <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </>
    );
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/admin" component={Admin} />

          <Route path="/" component={Main} />

          {/* {/* <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
