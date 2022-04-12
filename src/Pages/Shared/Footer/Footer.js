import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p><small>All right reserved @ {year}</small></p>
        </div>
    );
};

export default Footer;