import React from 'react';
import {BrowserRouter,Route,Switch, Link, NavLink} from 'react-router-dom';


const Header=()=>{
    return (<div>
        <header>
        <h1>Expensify</h1>
        <NavLink activeClassName='is-active'  to='/' exact={true}>Home</NavLink>  
        <NavLink activeClassName='is-active' to='/about'> About</NavLink> 
        <NavLink activeClassName='is-active' to='/help'> Help </NavLink>
        </header>
    </div>)
}

export default Header;