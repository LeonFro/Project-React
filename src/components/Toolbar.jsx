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
                             <button className="btn btn-default"><NavLink to="/Provider" activeStyle={{color:"red"}}>Provider</NavLink></button>
                            <button  className="btn btn-default"> <NavLink exact to="/Goods" activeStyle={{color:"green"}}>Goods</NavLink></button>
                            <button  className="btn btn-default"><NavLink to="/Stock" activeStyle={{color:"orange"}}>Stock</NavLink></button>
                            <button  className="btn btn-default"><NavLink to="/SummTabs" activeStyle={{color:"orange"}}>SummTabs</NavLink></button>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Toolbar;
