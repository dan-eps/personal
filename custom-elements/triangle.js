class Triangle extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "triangle-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('triangle-popup-inner')" id="triangle-popup-inner">
        <div id="triangle-popup-header" class="popup-header">TheTriangle.org (built by me) 
          <div class="window-controls">
            <span onclick="hidePopup('triangle-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('triangle-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('triangle-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div id="iframe-wrapper">
          <iframe src="https://www.thetriangle.org"></iframe>
        </div>
      </div>`;
      dragElement(document.getElementById("triangle-popup-inner"));
    }
}

customElements.define("triangle-popup", Triangle);