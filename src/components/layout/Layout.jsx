import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <header><Navbar/> </header>
            <main>{children}</main>
            <footer><Footer/></footer>
        </div>
    );
};

export default Layout;