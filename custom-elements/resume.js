class Resume extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "resume-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('resume-popup-inner')" id="resume-popup-inner">
        <div id="resume-popup-header" class="popup-header">Daniel_Epstein_Resume_Final(2).pdf 
          <div class="window-controls">
            <span onclick="hidePopup('resume-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('resume-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('resume-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <embed src="DanielEpsteinResume.pdf#toolbar=0" width="820" height="555">
      </div>`;
      dragElement(document.getElementById("resume-popup-inner"));
    }
}

customElements.define("resume-popup", Resume);