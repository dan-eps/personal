class About extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "about-me-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('aboutme-popup-inner')" id="aboutme-popup-inner">
        <div id="aboutme-popup-header" class="popup-header">Daniel Epstein - About Me 
          <div class="window-controls">
            <span onclick="hidePopup('about-me-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('about-me-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('about-me-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <img src="img/myspacebanner.webp"/>
        <section class="myspace">
            <div class="myspace-left">
                <h2> Daniel Epstein </h2>
                <div class="profile">
                    <img src="img/daniel_small.jpg"/>
                    <div>
                        <div> "Make someone else's day a little easier" </div>
                        <br/>
                        <div> Male </div>
                        <div>` + getYearsSince(new Date("2002-10-18")) + `</div>
                        <div> Philadelphia, Pennsylvania </div>
                        <div> United States </div>
                    </div>
                </div>
                <aside class="myspace-contact">
                    <h5> Contact Daniel </h5>
                    <div>
                        <span onclick="showPopup(event, 'contact-popup', 'contact')"><a> Send Message </a></span>
                        <span><a href="https://linkedin.com/in/daniel-epstein-cs" target="_blank" rel="noopener noreferrer"> Add to Network </a></span>
                        <span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://danielepstein.netlify.app" target="_blank" rel="noopener noreferrer"> Share with Friends </a></span>
                        <span><a href="https://buymeacoffee.com/danielepstein" target="_blank" rel="noopener noreferrer"> Buy Me a Coffee </a></span>
                        <span onclick="showPopup(event, 'portfolio-popup', 'portfolio')"><a> See Projects </a></span>
                        <span><a href="mailto:mdanielepstein@gmail.com"> Instant Message </a></span>
                    </div>
                </aside>
            </div>
            <div class="myspace-right">
                <h3>Daniel is in your extended network</h3>
                <h4> Daniel's blurbs </h4>
                <b> About me: </b>
                <p> Hi! I'm a Computer Science senior at Drexel (minor in Mathematics, GPA 3.78) with two co-ops at Susquehanna International Group under my belt: 
                one building data infrastructure for energy trading, and one developing applications that managed processes across 3,000+ remote hosts for proprietary 
                trading systems. I thrive at the intersection of hard technical problems and real-world stakes.</p>
                <br/>
                <p> What drives me isn't just solving problems, but explaining them. Whether I'm partnering with traders to improve execution time, directing the tech 
                infrastructure at The Triangle, or helping high schoolers grasp their first CS concepts at Drexel CCI, I genuinely love making complex things click for 
                people. </p>
                <br/>
                <p> I'm a rising May 2026 grad actively looking for full-time software engineering roles. If you're building something interesting, let's talk. </p>
                <br/>
                <b> What I'm looking for: </b>
                <p> Full-Stack Software Engineering roles or Freelance oppurtunities! </p>
            </div>
        </section>
      </div>`;
      dragElement(document.getElementById("aboutme-popup-inner"));
    }
}

function getYearsSince(pastDate) {
  const today = new Date();
  const years = today.getFullYear() - pastDate.getFullYear();

  // Adjust if the current date is before the anniversary in the current year
  if (today.getMonth() < pastDate.getMonth() || (today.getMonth() === pastDate.getMonth() && today.getDate() < pastDate.getDate())) {
    return years - 1;
  }

  return years;
}


customElements.define("aboutme-popup", About);