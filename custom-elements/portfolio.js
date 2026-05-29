class Portfolio extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "portfolio-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('portfolio-popup-inner')" id="portfolio-popup-inner">
        <div id="portfolio-popup-header" class="popup-header">Local Disk (C:)
          <div class="window-controls">
            <span onclick="hidePopup('portfolio-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('portfolio-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('portfolio-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div class="popup-body">
          <div id="menuBar" class="bar">
            <a><span class="first-letter">F</span>ile</a>
            <a><span class="first-letter">E</span>dit</a>
            <a><span class="first-letter">V</span>iew</a>
            <a><span class="first-letter">F</span>avorites</a>
            <a><span class="first-letter">T</span>ools</a>
            <a><span class="first-letter">H</span>elp</a>
          </div>
          <div id="menuBarLogo">
            <img src="img/newlogo.png"/>
          </div>
          <div id="navBar" class="bar">
            <img src="img/back_icon.png"/>
            <select onmousedown="(function(e){ e.preventDefault(); })(event, this)">
              <option>Back</option>
            </select>
            <img src="img/back_icon.png" style="transform: rotate(180deg); opacity: 0.5;"/>
            <select onmousedown="(function(e){ e.preventDefault(); })(event, this)" style="opacity: 0.5;">
              <option></option>
            </select>
            <img src="icons/ICON/922.ico"/> 
          </div>
          <div id="search" class="bar">
            <img src="icons/ICON/190.ico"/>
            Search
          </div>
          <div id="folders">
            <img src="icons/ICON/20.ico"/>
            Folders
          </div>
          <div id="idek" class="bar">
            <img src="icons/ICON/659.ico"/>
          </div>
          <div id="address" class="bar">
            <span>Address</span>
            <div id="address_input_container">
              <input id="address_input" type="text" value="C:\\"/>
            </div>
          </div>
          <div id="folders-select">
            <div class="bar fs-header" style="width: calc(100% - 20px); border-right: 5px solid #f1eee5;"> Folders </div>
            <div id="folders-list-container">
              <ul>
                <li class="unselectable"><img src="icons/ICON/34.ico"/> My Documents</li>
                <li class="unselectable"><img src="icons/ICON/117.ico"/> My Computer</li>
                <ul>
                  <li class="unselectable" ><img src="icons/ICON/49.ico"/> 3.5 Floppy (A:)</li>
                  <li id="blog_select" class="unselectable" ondblclick="blog_files();"><img src="icons/ICON/91.ico"/> Removable Disk (B:)</li>
                  <li id="project_select" class="unselectable" ondblclick="projects_files();"><img src="icons/ICON/64.ico"/> Local Disk (C:)</li>
                  <ul>
                    <li id="maverick_select" class="no-subfolder unselectable" ondblclick="maverick_files();"><img src="icons/ICON/34.ico" /> MAVERICK </li>
                    <li id="kanoodle_select" class="no-subfolder unselectable" ondblclick="kanoodle_files();"><img src="icons/ICON/34.ico" /> Kanoodle Solver</li>
                    <li id="shell_select" class="no-subfolder unselectable" ondblclick="shell_files();"><img src="icons/ICON/34.ico" /> Custom Shell</li>
                    <li id="liftoff_select" class="no-subfolder unselectable" ondblclick="liftoff_files();"><img src="icons/ICON/34.ico" /> Liftoff Planner</li>
                    <li id="starwars_select" class="no-subfolder unselectable" ondblclick="starwars_files();"><img src="icons/ICON/34.ico" /> Star Wars Game</li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>
          <div id="folders-content">
            <div class="bar fs-header" style="width: calc(40% - 22px)"> Name </div>
            <div class="bar fs-header" style="justify-content: end"> Size </div>
            <div class="bar fs-header"> Type </div>
            <div class="bar fs-header"> Date Modified </div>
          </div>
          <div id="file-footer">
            <div id="comic-instructions" style='padding: 5px 10px'> Double Click on Folders and Files to see more </div>
          </div>
        </div>
      </div>`;
      dragElement(document.getElementById("portfolio-popup-inner"));
    }
}

customElements.define("portfolio-popup", Portfolio);