import {Routes, Route} from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "../src/pages/Home/Home"
import Register from "./pages/Register/Register";
import './styles/style.scss'
import Login from "./pages/Login/Login";
import Sales from "./pages/Sales/Sales";
import Delivery from "./pages/Delivery/Delivery";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";
import Basket from "./pages/Basket/Basket";
import Order from "./pages/Order/Order";

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/sales'} element={<Sales/>}></Route>
                <Route path={'/delivery'} element={<Delivery/>}></Route>
                <Route path={'/basket'} element={<Basket/>}></Route>
                <Route path={'/catalog/:category'} element={<Catalog/>}></Route>
                <Route path={'/product/:id'} element={<Product/>}></Route>
                <Route path={'/product/add'} element={<AddProduct/>}></Route>
                <Route path={'/order'} element={<Order/>}/>
            </Route>
          <Route path={'/register'} element={<Register/>} />
          <Route path={'/login'} element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
