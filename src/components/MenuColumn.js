import '../styles/menuColumn.css';
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import SubMenu from './SubMenu'

function MenuColumn({columnVisibility, updateColumnVisibility, menuData}) {
    function columnInteraction(e,visible) {
        if(e.target.tagName!="A" && e.target.tagName!="LI" && e.target.tagName!="UL" && !e.target.classList.contains("link-arrow")) {
            updateColumnVisibility(visible);
        }
      }

	return (
        <nav className={`menu-column ${columnVisibility ? "" : "collapsed"}`} onClick={(e)=>(columnInteraction(e,!columnVisibility))}>
            <ul id="main-menu" className="collapse">
                {
                    menuData.map((link,index)=>(
                        link.submenu.length?<SubMenu key={index} mainlink={link}/>: 
                        <li key={index}><Link to={link.path}>{link.name}</Link></li>
                    ))
                }
                    </ul>
                    <div className={`arrow ${columnVisibility ? "" : "collapsed"}`}></div>

        </nav>
	)
}

export default MenuColumn