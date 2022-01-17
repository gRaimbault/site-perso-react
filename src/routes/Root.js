//this component is made to keep the same Header everywhere on the app

// there is a small problem because of the root link
// the column is rerendered between root and presentation as two different column. Not really important problem
// maybe possible to improve all of this with redux but not sure. Will maybe redo it once I learn redux 

import Header from '../components/Header'
import { Link, Outlet, Navigate } from "react-router-dom";


function Root() {
	return (
        <div>
        <Header/>
        <Outlet />
      </div>
	)
}

export default Root