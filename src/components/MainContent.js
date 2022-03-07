import '../styles/mainContent.css';
import { Link } from "react-router-dom";

function MainContent() {
	return (
        <div id="main-content-grid">
            <div>
                <div id="presentation">
                    <div className="container">
                        <div id="circleImg">
                        </div>
                        <h1>Hi, I am Guillaume!</h1>
                        <p>Hello everybody. I’m a computer engineer graduated from the specialized master IDE (Interactive Digital Experiences : video game and multimedia) at the school of images, Gobelins, in partnership with CNAM-ENJMIN. I'm looking for opportunities in web development, video games, virtual reality, new media technologies or artificial intelligence.</p>
                        <p>You can discover my work on this website.</p>
                        <br/><br/>
                        <h3>(This website is made using React, its code can be found on Github: <a href="https://github.com/gRaimbault/site-perso-react">https://github.com/gRaimbault/site-perso-react</a>)</h3>
                    </div>
                </div>
                <div id="projectsBlock">
                    <div className="container">
                    <Link to="/presentation/work/hina" className="container-project-img-and-text">
                        <div className="container-project-img">
                            <img alt="" className="project-img" src={require("../assets/img/logoHina.png")} />	
                        </div>
                        <p>HINA</p>
                    </Link>
                    <Link to="/presentation/work/wacfashion" className="container-project-img-and-text">
                        <div className="container-project-img">
                            <img alt="" className="project-img" src={require("../assets/img/logo_wearecolorsfashion.png")} />
                        </div>
                        <p>WE ARE COLORS FASHION</p>
                    </Link>
                    <Link to="/presentation/work/terramars" className="container-project-img-and-text">
                        <div className="container-project-img">
                            <img alt="" className="project-img" src={require("../assets/img/logoTerramars.png")} />
                        </div>
                        <p>TERRAMARS</p>
                    </Link>
                    <Link to="/presentation/work/nopex" className="container-project-img-and-text">
                        <div className="container-project-img">
                            <img alt="" className="project-img" src={require("../assets/img/logo-NOPEX3.jpg")} />	
                        </div> 
                        <p>NOPEX</p>
				    </Link>	
                    <div className="clear"></div> 		
                    </div>
                </div>
            </div>
        </div>
	)
}

export default MainContent