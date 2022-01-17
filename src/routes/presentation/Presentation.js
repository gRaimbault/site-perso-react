import MenuColumn from '../../components/MenuColumn'
import { Outlet } from "react-router-dom";

function Presentation({columnVisibility, updateColumnVisibility}) {
  const menuData = [ {
    path: "/presentation",
    name: "HOME",
    submenu: []
  },
  {
    path: "/presentation/work",
    name: "WORK",
    submenu: [ {
      path: "/presentation/work/hina",
      name: "Hina",
      submenu: []
    },
    {
      path: "/presentation/work/wacfashion",
      name: "Wacfashion",
      submenu: []
    },
    {
      path: "/presentation/work/terramars",
      name: "Terramars",
      submenu: []
    },
    {
      path: "/presentation/work/nopex",
      name: "Nopex",
      submenu: []
    }
  ]
  },
  {
    path: "/presentation/about",
    name: "ABOUT",
    submenu: []
  },
  {
    path: "/presentation/contact",
    name: "CONTACT",
    submenu: []
  }

  ]
  
	return (
        <div>
        <MenuColumn columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility} menuData={menuData}/>
        <div id="main-content" className={` ${columnVisibility ? "column-displayed" : ""}`}>
          <Outlet/>
          {/*window.location.pathname==="/"||window.location.pathname==="/presentation"?<MainContent columnVisibility={columnVisibility} />:""*/}
        </div>
        
      </div>
	)
}

export default Presentation
