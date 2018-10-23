import React from 'react';

const Header = () => {
    return (
        <div className="mb-5 mt-2">
           Made for showcase by MM
            <a href="/form" className="float-sm-right">Create User</a>
            <a href="/" className="float-sm-right mr-5">Home</a>
            <hr />
        </div>
    );
};

export default Header;