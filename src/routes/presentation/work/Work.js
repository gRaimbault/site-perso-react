import { Link } from "react-router-dom";

function Work() {
	return (
	    <div id="projectsBlock">
	    	<div className="container pt">
    			<div className="section-title">
    				<h3>LATEST WORKS</h3>
    			</div>
				<Link to="hina" className="container-project-img-and-text">
		    		<div className="container-project-img">
		    			<img alt="" className="project-img" src={require("../../../assets/img/logoHina.png")} />	
		    		</div>
		    		<p>HINA</p>
				</Link>
    			<Link to="wacfashion" className="container-project-img-and-text">
		    		<div className="container-project-img">
		    			<img alt="" className="project-img" src={require("../../../assets/img/logo_wearecolorsfashion.png")} />
		    		</div>
	    			<p>WE ARE COLORS FASHION</p>
				</Link>
    			<Link to="terramars" className="container-project-img-and-text">
		    		<div className="container-project-img">
		    			<img alt="" className="project-img" src={require("../../../assets/img/logoTerramars.png")} />
		    		</div>
	    			<p>TERRAMARS</p>
				</Link>
	    		<Link to="nopex" className="container-project-img-and-text">
		    		<div className="container-project-img">
		    			<img alt="" className="project-img" src={require("../../../assets/img/logo-NOPEX3.jpg")} />	
		    		</div> 
		    		<p>NOPEX</p>
				</Link>	
	    		<div className="clear"></div>	
	    	</div>
	    </div>
	)
}

export default Work



