class Sticky extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "sticky-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('sticky-popup-inner')" style="z-index: 1" id="sticky-popup-inner">
        <div id="sticky-popup-header" class="popup-header">Sticky Notes
          <div class="window-controls">
            <span onclick="hidePopup('sticky-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('sticky-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('sticky-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div class="popup-body">
          <div id="menuBar2" class="bar">
            <a><span class="first-letter">T</span>ools</a>
            <a><span class="first-letter">H</span>elp</a>
          </div>
          <div class="message">
          welcome to my website! it's still a work in progress, 
          but please feel free to play around with it. 
          
          <br/> <br/> 

          Feedback through the contact form 
          would be much appreciated!

          <br/> <br/> 

          p.s. the icons and popup windows (including this one) can be dragged around!
          </div>
        </div>
      </div>`;
      dragElement(document.getElementById("sticky-popup-inner"));
    }
}

customElements.define("sticky-popup", Sticky);

