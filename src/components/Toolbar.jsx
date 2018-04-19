import React from 'react';
import { NavLink } from 'react-router-dom';

function Toolbar() {
    return (
        <header>
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">

                    <a className="navbar-brand">Web stady</a>

                    <div className="nav navbar-nav">
                        <ul className="nav nav-pills">
                            <button className="btn btn-link"><NavLink exact to="/" activeStyle={{ color: "red" }}>Home</NavLink></button>
                            <button className="btn btn-link"><NavLink to="/Vender" activeStyle={{ color: "red" }}>Vender</NavLink></button>
                            <button className="btn btn-link"> <NavLink to="/Goods" activeStyle={{ color: "green" }}>Goods</NavLink></button>
                            <button className="btn btn-link"><NavLink to="/Store" activeStyle={{ color: "orange" }}>Store</NavLink></button>
                            {/* <button className="btn btn-link"><NavLink to="/SummTabs" activeStyle={{ color: "orange" }}>SummTabs</NavLink></button> */}
                            <button className="btn btn-link"><NavLink to="/Doc" activeStyle={{ color: "orange" }}>Documents</NavLink></button>
                            <button className="btn btn-link"><NavLink to="/Writeoff" activeStyle={{ color: "orange" }}>WriteOff</NavLink></button>
                            <button className="btn btn-link"><NavLink to="/Totallist" activeStyle={{ color: "orange" }}>Totallist</NavLink></button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Toolbar;
