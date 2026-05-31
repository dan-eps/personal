class WorkExperience extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "work-experience-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('work-experience-popup-inner')" id="work-experience-popup-inner">
        <div id="work-experience-popup-header" class="popup-header"><span id="work-experience-title">Work Experience</span> 
          <div class="window-controls">
            <span onclick="hidePopup('work-experience-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('work-experience-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('work-experience-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div id="media-player-bg">
            <aside id="work-options">
                <img src="img/cci.png"/>
                <img src="img/triangle.png"/>
                <img src="img/sig.jpg"/>
                <img src="img/lyquix.png"/>
            </aside>
            <div id="media">
              COMING SOON
            </div>
        </div>
      </div>`;
      dragElement(document.getElementById("work-experience-popup-inner"));
    }
}

customElements.define("work-experience-popup", WorkExperience);