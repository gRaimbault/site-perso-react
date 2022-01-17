function Nopex() {
	return (
        <div id="projectBlock">
        <div className="container pt">
            <img alt="" id="nopexImgTitle" className="project-title" src={require("../../../assets/img/logo-NOPEX3.jpg")} />
            <h4 className="paragraph-title">The project</h4>
            <p>
                During my year in Gobelins, we had one month to do an interactive storytelling. We could choose any subject we wanted but we had to use web technologies to implement it. I joined two people to make a story on tablet about transhumanism and new technologies. Our goal was to talk about the impact of technologies on people and the environment. Every decision people make about technologies can have an impact on the future, so the experience work the same way : each decision made by the player will affect his avatar and his environment.<br/>
                We made a story with an absurd side to show the danger of science without conscience.
            </p> 
            <div className="work-image-and-caption two-image-near first-two-image-near">
                <img alt="" className="" src={require("../../../assets/img/nopex/bedroom.png")} />
                <span className="image-caption">The player begins the story in his room</span>
            </div>
            <div className="work-image-and-caption two-image-near second-two-image-near">
                <img alt="" className="" src={require("../../../assets/img/nopex/outsideNopex.jpg")} />
                <span className="image-caption">Outside of NOPEX</span>
            </div>
            <h4 className="paragraph-title clear">The story</h4>
            <p className="clear">
                The story takes place in a near futur, technologies have changed the whole society and the environment is suffering. People use robotic, surgery, or even genetic manipulation to ameliorate their body, their mind. Science has reached a whole new level and keep improving by taking all possible risks. All think the problems brought by technologies will be resolved by future improvements.<br/>
                One day the main character, the player, receive an invitation of NOPEX the biggest transhumanism research center. He won a complete checkup with the best experts. Bionic eye, 3D printed lung, nanorobots... afer scanning his body, they're going to give him all choices to improve himself. What will be the consequences ?
            </p>
            <div className="work-image-and-caption">
                <img alt="" className="" src={require("../../../assets/img/nopex/scanner.png")} />
                <span className="image-caption">The NOPEX scanner </span>
            </div>
            <h4 className="paragraph-title">The tools</h4>
            <p>
                All the experience is done with HTML 5, CSS 3 and Javascript on a single page. The transitions beetween screens are coded with Javascript and Jquery. NOPEX is designed to work on Ipad.
            </p>
            <p>
                Images shows the environment and the avatar like they were photos taken with a fisheye lens. This effect cause the player to see the experience as if he were looking to the future through a microscope. The bright and acidulous colors reinforce the absurd side of the experience.
            </p>
            <div className="work-image-and-caption two-image-near first-two-image-near">
                <img alt="" className="" src={require("../../../assets/img/nopex/firstChoice.png")} />
                <span className="image-caption">The main screen : the player avatar, the environment and two items representing choices</span>
            </div>
            <div className="work-image-and-caption two-image-near second-two-image-near">
                <img alt="" className="" src={require("../../../assets/img/nopex/resultFirstChoice.png")} />
                <span className="image-caption">First choice's result</span>
            </div>
            <h4 className="paragraph-title clear">The gameplay</h4>
            <p className="clear">
                The experience is designed for Ipad, so the whole gameplay is done with touches. The player must read the story and touch the arrow to progress to the next step or touch a text answer to continue. <br/>
                During the main part, he can see his avatar, his environment and he must choose beetween possible improvements from NOPEX's company. These are the main choices of the experience. They are represented by items that need to be drag and dropped on the avatar image. When the player drag an item on his avatar and validate, both his avatar and his environment change, affected by the choice.<br/>
                At the end of the experience, the player can see a screen of his avatar in his environment , he can see the result of his choices.
            </p>
            <div className="work-image-and-caption two-image-near first-two-image-near">
                <img alt="" className="" src={require("../../../assets/img/nopex/secondChoice.png")} />
                <span className="image-caption">Second choice for breathing</span>
            </div>
            <div className="work-image-and-caption two-image-near second-two-image-near">
                <img alt="" className="" src={require("../../../assets/img/nopex/resultSecondChoice.png")} />
                <span className="image-caption">Second choice's result</span>
            </div>

            <div className="work-image-and-caption clear">
                <img alt="" className="" src={require("../../../assets/img/nopex/lastImageMockupp.jpg")} />
                <span className="image-caption">One of the possible final result</span>
            </div>
            <p>
                <u>Team :</u><br/>
                -Céline BERTHELIN - artist illustrator<br/>
                -Hélène CAMU - artist illustrator<br/>
                -Myself - developer
            </p>
        </div>
    </div>
	)
}

export default Nopex