class Comics extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "comics-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('comics-popup-inner')" id="comics-popup-inner">
        <div id="comics-popup-header" class="popup-header">Comics
          <div class="window-controls">
            <span onclick="hidePopup('comics-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('comics-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('comics-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <div class="popup-body">
          <div id="menuBar2" class="bar">
            <a><span class="first-letter">F</span>ile</a>
            <a><span class="first-letter">E</span>dit</a>
            <a><span class="first-letter">V</span>iew</a>
            <a><span class="first-letter">I</span>mage</a>
            <a><span class="first-letter">C</span>olors</a>
            <a><span class="first-letter">H</span>elp</a>
            <a class="prev-comic" onclick="updateComic(-1)"><span class="first-letter">P</span>rev</a>
            <a class="next-comic" onclick="updateComic(1)"><span class="first-letter">N</span>ext</a>
          </div>
          <aside id="tools">
            <div class="tool-select">
              <img src="icons/paint_star.png"/>
              <img src="icons/paint_rect.png"/>
              <img src="icons/paint_eraser.png"/>
              <img src="icons/paint_bucket2.png"/>

              <img src="icons/paint_dropper.png"/>
              <img src="icons/paint_magnify.png"/>
              <img src="icons/paint_pencil.png"/>
              <img src="icons/paint_brush.png"/>

              <img src="icons/paint_bucket.png"/>
              <img src="icons/paint_text.png"/>
              <img src="icons/paint_line.png"/>
              <img src="icons/paint_spline.png"/>
              
              <img src="icons/paint_rect2.png"/>
              <img src="icons/paint_shape.png"/>
              <img src="icons/paint_oval2.png"/>
              <img src="icons/paint_oval.png"/>

              <div class="cbox empty-rect"></div>

            </div>
          </aside>
          <div id="comics-window">
            <img id="comic" data-src-index="0" src="comics/PROBLEM-SOLVING.png"/>
          </div>
          <div id="colors">
            <div class="preset-box cbox">
              <div id="preset1" class="color-box cbox" style="background-color:black;"></div>
              <div id="preset2" class="color-box cbox" style="background-color:white;"></div>
            </div>
            <div class="color-box cbox" style="background-color:black;"></div>
            <div class="color-box cbox" style="background-color:#848484;"></div>
            <div class="color-box cbox" style="background-color:#842100;"></div>

            <div class="color-box cbox" style="background-color:#848442;"></div>
            <div class="color-box cbox" style="background-color:#216300;"></div>
            <div class="color-box cbox" style="background-color:#008484;"></div>

            <div class="color-box cbox" style="background-color:#00087b;"></div>
            <div class="color-box cbox" style="background-color:#ff0084;"></div>
            <div class="color-box cbox" style="background-color:#848442;"></div>

            <div class="color-box cbox" style="background-color:#004242;"></div>
            <div class="color-box cbox" style="background-color:#0073ff;"></div>
            <div class="color-box cbox" style="background-color:#003590;"></div>

            <div class="color-box cbox" style="background-color:#8400ff;"></div>
            <div class="color-box cbox" style="background-color:#834000;"></div>
            <div class="color-box cbox" style="background-color:#ffffff;"></div>

            <div class="color-box cbox" style="background-color:#c2c0be;"></div>
            <div class="color-box cbox" style="background-color:#ff0105;"></div>
            <div class="color-box cbox" style="background-color:#fffe08;"></div>

            <div class="color-box cbox" style="background-color:#09fc08;"></div>
            <div class="color-box cbox" style="background-color:#03fdfb;"></div>
            <div class="color-box cbox" style="background-color:#0501f6;"></div>

            <div class="color-box cbox" style="background-color:#f30af1;"></div>
            <div class="color-box cbox" style="background-color:#fdfd89;"></div>
            <div class="color-box cbox" style="background-color:#02fb83;"></div>

            <div class="color-box cbox" style="background-color:#80fdfc;"></div>
            <div class="color-box cbox" style="background-color:#8c89e3;"></div>
            <div class="color-box cbox" style="background-color:#f70481;"></div>

            <div class="color-box cbox" style="background-color:#fe7f44;"></div>
          </div>
          <div id="comic-instructions"> Click Prev and Next to view other comics </div>
        </div>
      </div>`;
      dragElement(document.getElementById("comics-popup-inner"));
    }
}

const comics = [
  "comics/PROBLEM-SOLVING.png",
  "comics/DAYLIGHT.png",
  "comics/FOOTBALL.png",
  "comics/GYM.png",
  "comics/DATING-AD.png",
  "comics/GONE.png",
  "comics/WHEEL-OF-WEATHER.png",
  "comics/CPTNE-1.png",
  "comics/ACADEMY.png",
  "comics/CHESS.png",
  "comics/CPTNE-2.png",
  "comics/COCOS.png",
  "comics/COMMUTING.png",
  "comics/CPTNE-3.png",
  "comics/SAXBYS.png",
  "comics/OPENAI-PAYWALL.png",
  "comics/SCOOTER-THEFT.png",
  "comics/SUPERHEROES.png",
  "comics/OUTLOOK.png",
  "comics/FARE-EVASION.png"
]

function updateComic(increment){
  const c = document.getElementById("comic");
  let i = parseInt(c.getAttribute("data-src-index"));
  i += parseInt(increment);
  if(i < 0){
    i = comics.length - 1;
  }
  if (i >= comics.length){
    i = 0;
  }
  let n = comics[i];
  console.log(i, n)
  c.setAttribute("data-src-index", i)
  c.setAttribute("src", comics[i])
}

customElements.define("comics-popup", Comics);

