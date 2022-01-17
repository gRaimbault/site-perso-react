import { useState } from 'react';
import MenuColumn from '../../components/MenuColumn'
import { Link, Outlet } from "react-router-dom";

function Atelier({columnVisibility, updateColumnVisibility}) {
    const menuData = [ {
        path: "/atelier/entrance",
        name: "ENTREE",
        submenu: []
      }]
	return (
        <div>
            <MenuColumn columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility} menuData={menuData}/>
            <div id="main-content" className={` ${columnVisibility ? "column-displayed" : ""}`}>
                <Outlet/>
        
            </div>
        </div>
	)
}

export default Atelier