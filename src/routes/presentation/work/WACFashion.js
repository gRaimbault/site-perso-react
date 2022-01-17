function WACFashion() {
	return (
        <div id="projectBlock">
            <div className="container">
                <img alt="" className="project-title" src={require("../../../assets/img/logo_wearecolorsfashion.png")} />
                <h4 className="paragraph-title">The project</h4>
                <p>
                    "We are colors fashion" is a multimedia project I did during my internship at A-BLOK, a franco-german SME evolving in the events industry. A-BLOK wanted me to spend four months creating a new commercial offer for their clients. They needed this experience developed for a trade show called Viscom in Frankfurt, Germany. The goal of this project is to give people the opportunity to design a cloth easily by coloring a shape on an Ipad and then seeing automatically a 3D character wearing it and moving around. 
                </p>
                <div className="work-video-and-caption">
                    <video id="wacfVideo" controls>
                        <source src="video/wacf_video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <span className="video-caption">WACFashion's trailer</span>
                </div>
                <p>
                    A-BLOK wanted to find new clients in the RETAIL industry, so we made this experience about clothes. It's an evolution of an already existing offer called "We are colors" in which people can color shapes like butterflies and see them appearing on a screen. This time, clothes appear on 3D models which moves around in a 3D space.
                </p>
                <div className="work-image-and-caption two-image-near first-two-image-near">
                    <img alt="" className="" src={require("../../../assets/img/wacf/DessinIpadMieux.jpg")} />
                    <span className="image-caption">The coloring app</span>
                </div>
                <div className="work-image-and-caption two-image-near second-two-image-near">
                    <img alt="" className="" src={require("../../../assets/img/wacf/SceneGeneraleMieux.jpg")} />
                    <span className="image-caption">Global scene</span>
                </div>
                <h4 className="paragraph-title clear">The tools</h4>
                <p className="clear">
                    We used the already existing Ipad app (C#), server software(c#) and Max/msp communication from the former offer "We are colors". We evolved each parts and made them communicate properly.<br/>
                    A-BLOK wanted the nicest rendering possible for this experience. They wanted to learn about game engine which could help them create faster and nicer. We chose the game engine Unity to implement the 3D scene.<br/>
                    We created the 3D models using Adobe Fuse and Cinema 4D.
                </p>
                
                <div className="work-image-and-caption">
                    <img alt="" className="" src={require("../../../assets/img/wacf/overviewViscom.jpg")} />
                    <span className="image-caption">The installation in Viscom</span>
                </div>
                <h4 className="paragraph-title clear">The experience</h4>
                <p>
                    People come and put colors on a shape on an Ipad with their fingers. They design whatever they want on their cloth. Then they save and send it by entering their name and mail address. The new cloth is automatically added on a 3D woman on a big screen. We can see a small movement scene where the 3D woman show the cloth. Then the woman is added to a large scene with others women wearing designed clothes. The experience's goal is to engage audiences so we send an email to each participant with a link to the website experience where they can find a gallery with all the designed clothes and vote for them. They can also share this content on social medias.
                </p>
                <div className="work-image-and-caption two-image-near second-two-image-near">
                    <img alt="" className="" src={require("../../../assets/img/wacf/SceneGeneraleGrandAngleMieux.jpg")} />
                    <span className="image-caption">Global scene : overview</span>
                </div>
                <div className="work-image-and-caption two-image-near first-two-image-near">
                    <img alt="" className="" src={require("../../../assets/img/wacf/SceneSeuleMieux.jpg")} />
                    <span className="image-caption">Movement scene</span>
                </div>
                <p>
                    <u>Team :</u><br/>
                    -Kim BASCHET - artistic direction<br/>
                    -David DELASSUS - project manager<br/>
                    -Marco KELLING - developer server/C#, Ipad app<br/>
                    -Mathieu CONSTANS - developer Max/Msp<br/>
                    -Myself - developer Unity/C#
                </p>
            </div>
        </div>
	)
}

export default WACFashion