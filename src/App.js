
import './App.css';
import {Row,Col,Container}from "react-bootstrap"

import Navbarr from "./component/navbar.js"
import Footer from "./component/footer.js"
import Pay_using_details from './routes/pay_using_details.js';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/home';
import Pr_detail_page from './routes/detail_page.js';
import Property_portfolio from "./routes/property_portfolio.js"
import Get_in_touch from './component/get_in_touch.js';
function App() {
  return (
   
    <>

<Navbarr/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/pr_detail_page" element={<Pr_detail_page/>}></Route>
  <Route path="/pay_using_details" element={<Pay_using_details/>}></Route>
  <Route path="/Property_portfolio" element={<Property_portfolio/>}></Route>
  <Route path="/get_in_touch" element={<Get_in_touch/>}></Route>
  <Route path="/Property_portfolio/pr_detail_page" element={<Pr_detail_page/>}></Route>
</Routes>
<Footer/>
    </>
  );
}

export default App;
