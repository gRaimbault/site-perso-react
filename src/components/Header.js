import '../styles/header.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [sectionSelectVisibility, updateSectionSelectVisibility] = useState(false);
    const [currentSection, updateCurrentSection] = useState("Présentation pro");



    function changeSection(section){
        updateCurrentSection(section);
        updateSectionSelectVisibility(false);
    }

	return (
        <header>
            <nav>
                <div className="container"> 
                <Link id="mainTitle" to="/presentation">Guillaume Raimbault</Link>
                  
                        
                    {/*<div type="button" id="nav-button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar last-icon-bar"></span>
                    </div>*/}

                    <div className={`arrow ${sectionSelectVisibility ? "" : "collapsed"}`} onClick={()=>(updateSectionSelectVisibility(!sectionSelectVisibility))}></div>
                    <div id='sectionTitle' onClick={()=>(updateSectionSelectVisibility(!sectionSelectVisibility))}>
                        {currentSection} 
                    </div>
                    
                    <ul id="sectionSelect" className={` ${sectionSelectVisibility ? "" : "collapsed"}`}>
                        {currentSection==="Présentation pro"?"":
                        <li><Link section-name="Présentation pro" onClick={(e)=>changeSection(e.target.getAttribute("section-name"))} to="/presentation">Présentation Pro</Link></li>}

                        {currentSection==="Topics"?"":
                        <li><Link section-name="Topics" onClick={(e)=>changeSection(e.target.getAttribute("section-name"))} to="/topics/introduction">Topics</Link></li>}

                        {currentSection==="Atelier Numérique"?"":
                        <li><Link section-name="Atelier Numérique" onClick={(e)=>changeSection(e.target.getAttribute("section-name"))} to="/atelier/entrance">Atelier numérique</Link></li>}
                    </ul>
                    <div className="clear"></div>
                </div>  
            </nav>
        </header>
	)
}

export default Header