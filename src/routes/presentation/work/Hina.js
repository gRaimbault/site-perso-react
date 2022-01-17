function Hina() {
	return (
    	<div id="projectBlock">
    		<div className="container">
    			<img alt="" id="hinaImgTitle" className="project-title" src={require("../../../assets/img/logoHinaCropped.png")} />
                <h4 className="paragraph-title">The project</h4>
    			<p>
    				Hina is the final study project of my year in Gobelins. We had four months to produce an innovative experience with new media technologies. We could choose any subject. I'm passionate about virtual reality so I joined a team of five people to make a VR experience. Hina is a game about war and refugees. We wanted to talk about children who survive in conflict zone. 
    			</p>
                <div className="work-video-and-caption">
                    <iframe id="hinaVideo" title="Hina's trailer" src="https://www.youtube.com/embed/n_HDDj7qQyg" frameborder="0" allowfullscreen></iframe>
                    <span className="video-caption">Hina's trailer</span>
                </div>
                <h4 className="paragraph-title">The story</h4>
                <p>
                    The story takes place in 2020 in a fictional european country at war. Hina is a fourteen years old girl who lives with her brother in a community of survivors in an underground city inspired from Paris. One day a gang takes control of the camp and seriously hurts Hina's brother. Her goal is to keep her brother safe by getting away from war.
    			</p> 
    			<div className="work-image-and-caption two-image-near first-two-image-near">
    				<img alt="" className="" src={require("../../../assets/img/hina/hinaInBD.jpg")} />
    				<span className="image-caption">Hina in the BD phase</span>
    			</div>
    			<div className="work-image-and-caption two-image-near second-two-image-near">
    				<img alt="" className="" src={require("../../../assets/img/hina/BDEnvironment.jpg")} />
    				<span className="image-caption">A BD scenery</span>
    			</div>
                <h4 className="paragraph-title clear">The tools</h4>
    			<p className="clear">
    				We decided to use the Samsung Gear VR to implement our game. It is more accessible than others VR headset and represent a better way to reach casual gamers. We used Unreal Engine 4, Maya and Adobe Illustrator to develop the experience.
    			</p>
    			<div className="work-image-and-caption">
    				<img alt="" className="" src={require("../../../assets/img/hina/milan2.jpg")} />
    				<span className="image-caption">Milan, Hina's young brother</span>
    			</div>
    			<p>
    				Hina is an interactive storytelling experience in virtual reality. It is divided in two phases:<br/>
    				-when Hina is awaken, the player sees her life in an interactive graphic novel. Comics move all around the player with sounds. <br/>
    				-when Hina is asleep, the player is immersed in a 3D environment representing her dreams. He must explore it and find the end.<br/>
    				The game is made of differents episodes, each episode has multiple phases (Hina awaken and Hina asleep).
    			</p>
				<div className="work-image-and-caption two-image-near second-two-image-near">
    				<img alt="" className="hinaInBD2-image" src={require("../../../assets/img/hina/hinaInBD2.png")} />
    				<span className="image-caption">Hina in the BD phase</span>
    			</div>
    			<div className="work-image-and-caption two-image-near first-two-image-near">
    				<img alt="" className="" src={require("../../../assets/img/hina/mockupVR.jpg")} />
    				<span className="image-caption">Dream artwork</span>
    			</div>
                <h4 className="paragraph-title clear">The gameplay</h4>
    			<p className="clear">
    				Hina's gameplay is quite simple : everything you can do is controlled by your look. We wanted the most accessible gameplay possible so everyone can play the game without having to master any complicated task. <br/>
    				In the interactive graphic novel, the player can activate events by looking at black particles near drawings for a moment. This way he can choose between paths to continue the story.<br/>
    				In the 3D environment of the dreams, the player can activate events by looking at white particles for a moment. Some particles will make him move towards them, others will trigger events around him. When activated, some items will be linked to the player look and move acordingly. So the player can move some objects and place them around.<br/>
    				Each of these actions make visual and sound feedbacks so the player always knows when he really did something.
    			</p>
    			<div className="work-video-and-caption">
                    <iframe id="hinaVideo" title="Hina's Demo" src="https://www.youtube.com/embed/kptOL0fHyt8?ecver=1" frameborder="0" allowfullscreen></iframe>
    				<span className="video-caption">Demo of the game</span>
    			</div>
    			<p>
    				In this video you can see a demo of the game. <br/>
    				The experience begin with the graphic novel phase. The player is in the sky, when he looks down to the city he activate black particles and falls through two drawings then through the sewers. At the end of the fall, he can see Hina sleeping, he follows her in a small comic before an explosion happens and make her pass out. The player enters her dream : the 3D phase begins. The player move by looking at white particles. He activates events and moves objects to progress through the level. The dream gives informations for the next choices the player will have to do : here at the end, we discover blankets in the car's trunk. Hina may find theses blankets if the player orientate her near cars in his next choices.
    			</p>
    			<p>
    				<u>Team :</u><br/>
    				-Hélène CAMU - artist illustrator<br/>
    				-Timothée MARNAT - artist illustrator<br/>
                    -Ludovic MARGUERIE - 3D modeler and sound designer<br/>
                    -Jean-François COEUR - developer<br/>
    				-Michaël SAILLARD - developer<br/>
    				-Myself - developer
    			</p>
    	    </div>
    	</div>
	)
}

export default Hina