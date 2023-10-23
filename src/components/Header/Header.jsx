import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>

            <section className="header-section">

                <div className="header-container">
                    <div className="header-head">
                        <div className="icon"><img src="Logo.png" alt="" /></div>
                        <div className="menu">
                            <ul>
                                <li><a href="#" className='active'>Order</a></li>
                                <li><a href="#">Order Review</a></li>
                                <li><a href="#">Manage Inventory</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            
        </>
    );
};

export default Header;