import '../styles/subMenu.css';
import { Link } from "react-router-dom";
import $ from 'jquery';

function SubMenu({mainlink}) {

    function toggle(e) {
        e.preventDefault();
        const targetSubMenu = e.currentTarget.parentElement.lastChild;
        console.log("GNATEUR:");
        console.log($(targetSubMenu));
        $(targetSubMenu).slideToggle();
        targetSubMenu.classList.toggle('collapsed');
        e.currentTarget.lastChild.classList.toggle('collapsed')
    }

	return (
        <li><Link className="parent-link" to={mainlink.path} onClick={(e)=>(toggle(e))}>{mainlink.name} <div className="link-arrow collapsed"></div></Link>
            <ul className="sub-menu collapsed" >
                <li><Link to={mainlink.path}>Index</Link></li>
                {
                    mainlink.submenu.map((link,index)=>(
                        link.submenu.length?<SubMenu key={index} mainlink={link}/>: 
                        <li key={index}><Link to={link.path}>{link.name}</Link></li>
                    ))
                }
            </ul>
        </li>
	)
}

export default SubMenu