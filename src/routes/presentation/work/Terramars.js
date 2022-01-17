function Terramars() {
	return (
    	<div id="projectBlock">
    		<div className="container pt">
    			<img alt="" className="project-title" src={require("../../../assets/img/logoTerramars.png")} />
                <h4 className="paragraph-title">The project</h4>
    			<p>
    				Terramars is the first team project we did during my time in Gobelins. We had one month to produce the first level of a video game about Mars. We decided to create a four members team to develop a 2D platformer for tablets and smartphones. Our main goal was to do an accessible game with a dynamic gameplay and a good story.
    			</p>
                <h4 className="paragraph-title">The story</h4>
                <p>
                    After observing Mars for years, a scientists team amazingly discovered the presence of mounds very similar to ancient city ruins. A team of brave specialists decide to mount an expedition to travel from Earth to Mars: the mission will be called TerraMars!
                </p>
    			<div className="work-image-and-caption">
    				<img alt="" className="" src={require("../../../assets/img/terramars/bothHeroes.jpg")} />
    				<span className="image-caption">The two main characters: B.R.A.D.B.U.R.Y and Max.</span>
    			</div>
                <h4 className="paragraph-title">The tools</h4>
                <p>
                    We used Unity3D to develop this game while the 2D graphics were made using Adobe Illustrator.
                </p>
                <h4 className="paragraph-title">The gameplay</h4>
    			<p>
    				The player can control two members of the Terramars expedition : <br/>
    				-Max : a young scientist who can detect and collect items and ressources.<br/>
    				-B.R.A.D.B.U.R.Y(Biomechanical Robotic Android Designed for Battle, Utility and Rational Yelling) : an intelligent robot which can fight, jump higher than Max and drill rocks.<br/>
    				<br/>
    				Both characters have a special role, they must help each other during the whole game. The player needs to change beetween them depending on the situation he faces. He can do so by touching the top left button. The bottom left buttons control movements while the bottom right buttons control special actions from the character. The player must use Max to detect and collect oxygen and items to progress. He must use B.R.A.D.B.U.R.Y to fight ennemies from Mars and to drill his way through rocks.
    			</p>
    			<div className="work-image-and-caption two-image-near first-two-image-near">
    				<img alt="" className="" src={require("../../../assets/img/terramars/max.jpg")} />
    				<span className="image-caption">Max can detect and collect oxygen</span>
    			</div>
    			<div className="work-image-and-caption two-image-near second-two-image-near">
    				<img alt="" className="" src={require("../../../assets/img/terramars/bradbury.png")} />
    				<span className="image-caption">BRADBURY facing a Martian</span>
    			</div>
    			<p className="clear">
    				The game is running well on smartphones and tablets, people who tested it had some fun and wanted the project to be continued.
    			</p>
    			<div className="work-image-and-caption">
    				<img alt="" className="" src={require("../../../assets/img/terramars/smartphoneTerramars.jpg")} />
    				<span className="image-caption">Terramars on smartphone</span>
    			</div>
    			<p>
    				<u>Team :</u><br/>
    				-Hélène CAMU - artist illustrator<br/>
    				-Médéric HENIN - developer<br/>
    				-Jean-Christophe BARRE - developer<br/>
    				-Myself - developer
    			</p>
    	    </div>
    	</div>
	)
}

export default Terramars