import MenuColumn from '../../components/MenuColumn'
import { Outlet } from "react-router-dom";

function Topics({columnVisibility, updateColumnVisibility}) {
    const menuData = [ {
        path: "/topics/introduction",
        name: "INTRODUCTION",
        submenu: []
      }]

	return (
        <div>
            <MenuColumn columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility} menuData={menuData}/>
            <div id="main-content" className={` ${columnVisibility ? "column-displayed" : ""}`}>
                TOPICS
                <Outlet/>
        
            </div>

        </div>
	)
}

export default Topics