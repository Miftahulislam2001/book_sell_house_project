import React from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h3>This is admin page</h3>
            <Outlet/>
        </div>
    );
};

export default Admin;