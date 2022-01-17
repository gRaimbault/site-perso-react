//page for the root link of the website. Unfortunately, I didn't find a way to force to redirect to the presentation
//page, so it's a duplicate of the same menu column and content
import MainContent from '../components/MainContent'
import MenuColumn from '../components/MenuColumn'

function Home({columnVisibility, updateColumnVisibility}) {
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
        {<MainContent columnVisibility={columnVisibility} />}
        </div>
        
      </div>
	)
}

export default Home