// import React from 'react';

import { Outlet } from "react-router-dom";
import Nabvar from "../Navbar/Nabvar";
import Footer from "../Footer";

const Root = () => {
    return (
        <div className="" >
            <Nabvar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;