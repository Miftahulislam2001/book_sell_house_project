import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import LoadSpinner from '../ActiveLink/LoadSpinner/LoadSpinner';

const Admin = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadSpinner/>
    }
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Admin;