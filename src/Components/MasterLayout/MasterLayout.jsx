import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './MasterLayout.css';

export default class MasterLayout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className='text-center container mtop'>
                    <Outlet />
                </div>
                <Footer />
            </>
        )
    }
}