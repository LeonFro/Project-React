import React from 'react';
import { NavLink } from 'react-router-dom';

function Toolbar() {
    return (
        <header>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Web stady</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                             <li><NavLink to="/Provider" activeStyle={{color:"red"}}>Provider</NavLink></li>
                            <li> <NavLink exact to="/Goods" activeStyle={{color:"green"}}>Goods</NavLink></li>
                            <li><NavLink to="/Stock" activeStyle={{color:"orange"}}>Stock</NavLink></li>
                            <li><NavLink to="/Shipment" activeStyle={{color:"orange"}}>Shipment</NavLink></li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Toolbar;
