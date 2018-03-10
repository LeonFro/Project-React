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
                            <button className="btn btn-default"><NavLink exact to="/" activeStyle={{color:"red"}}>Home</NavLink></button>
                             <button className="btn btn-default"><NavLink to="/Vender" activeStyle={{color:"red"}}>Vender</NavLink></button>
                            <button  className="btn btn-default"> <NavLink to="/Goods" activeStyle={{color:"green"}}>Goods</NavLink></button>
                            <button  className="btn btn-default"><NavLink to="/Store" activeStyle={{color:"orange"}}>Store</NavLink></button>
                            <button  className="btn btn-default"><NavLink to="/SummTabs" activeStyle={{color:"orange"}}>SummTabs</NavLink></button>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Toolbar;
