class Notepad extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "notepad-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('notepad-popup-inner')" id="notepad-popup-inner">
        <div id="notepad-popup-header" class="popup-header"><span id="notepad-title">Untitled.txt</span> 
          <div class="window-controls">
            <span onclick="hidePopup('notepad-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('notepad-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('notepad-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div id="menuBar" class="bar" style="width: 100%">
          <a><span class="first-letter">F</span>ile</a>
          <a><span class="first-letter">E</span>dit</a>
          <a><span class="first-letter">V</span>iew</a>
          <a><span class="first-letter">F</span>avorites</a>
          <a><span class="first-letter">T</span>ools</a>
          <a><span class="first-letter">H</span>elp</a>
        </div>
        <article id="file-text">

        </article>
      </div>`;
      dragElement(document.getElementById("notepad-popup-inner"));
    }
}

customElements.define("notepad-popup", Notepad);