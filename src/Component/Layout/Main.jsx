import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Main = () => {
      return (
            <div className='mx-20'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
      );
};

export default Main;