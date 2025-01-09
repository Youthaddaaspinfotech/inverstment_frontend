import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Pr_detail_page from './detail_page';
import Pay_using_details from './pay_using_details';
import Property_portfolio from './property_portfolio';
import Get_in_touch from '../component/get_in_touch';
import About from './about';
import Navbarr from '../component/navbar';
import Footer from '../component/footer';
import Exit from '../component/exit';
const PrivateRoutes = () => (
    <>
        <Navbarr />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pr_detail_page" element={<Pr_detail_page />} />
            <Route path="/pay_using_details" element={<Pay_using_details />} />
            <Route path="/Property_portfolio" element={<Property_portfolio />} />
            <Route path="/get_in_touch" element={<Get_in_touch />} />
            <Route path="/Property_portfolio/pr_detail_page" element={<Pr_detail_page />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Exit />} />
        </Routes>
        <Footer />
    </>

);

export default PrivateRoutes;
