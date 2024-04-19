import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Homepage from './pages/home/Homepage.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Accessories from './pages/accessories/Accessories.jsx';
import Agro from './pages/agro/Agro.jsx';
import IT from './pages/IT/IT';
import Garments from './pages/garments/Garments';
import Blog from './pages/blog/Blog.jsx';
import NotFound from './pages/notFound/NotFound.jsx';


const AppRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/about-us" exact element={<AboutUs/>} />
                <Route path="/accessories" exact element={<Accessories/>} />
                <Route path="/agro" exact element={<Agro/>} />
                <Route path="/IT" exact element={<IT/>} />
                <Route path="/garments" exact element={<Garments/>} />
                <Route path="/blog" exact element={<Blog/>} />
                <Route path='/*' element={<NotFound/>}></Route>
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRoutes;