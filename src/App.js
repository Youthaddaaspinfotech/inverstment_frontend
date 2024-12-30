
import './App.css';
import {Row,Col,Container}from "react-bootstrap"

import Navbarr from "../src/component/navbar.js";
import Banner from './component/banner.js';
import Body from './component/body.js';
import Footer from './component/footer.js';
function App() {
  return (
   
    <>
  <Navbarr/>
      <Banner/>
<Body/>

<Footer/>
    </>
  );
}

export default App;
