class LitLab extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "lit-lab-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('lit-lab-popup-inner')" id="lit-lab-popup-inner">
        <div id="lit-lab-popup-header" class="popup-header">LitLabDU.org (built by me) 
          <div class="window-controls">
            <span onclick="hidePopup('lit-lab-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('lit-lab-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('lit-lab-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div id="iframe-wrapper" style="background-color: white">
          <iframe src="https://www.litlabdu.org"></iframe>
        </div>
      </div>`;
      dragElement(document.getElementById("lit-lab-popup-inner"));
    }
}

customElements.define("lit-lab-popup", LitLab);