class Popup extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("custom-popup", Popup);

function bringToFront(id) {
    var elements = document.getElementsByTagName("*")
    var maxZIndex = 1;

    for (var i = 0; i < elements.length; i++) {
        var zIndex = parseInt(getComputedStyle(elements[i]).zIndex, 10) || 0;
        maxZIndex = (zIndex < 1000 && zIndex > maxZIndex) ? zIndex : maxZIndex;
        console.log(zIndex, maxZIndex)
    }
    var pid = this.parent.id || id;
    if (pid) {
        document.getElementById(pid).style.zIndex = maxZIndex + 1;
    }
}

function showPopup(event, id, type) {
    if (event) {
        event.stopPropagation();
    }
    var elems = document.getElementsByClassName("selected");
    if (type == "portfolio") {
        projects_files();
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('selected');
        }
        document.getElementById("project_select").classList.add("selected");
    }
    else if (type == "blog") {
        id = "portfolio-popup"
        blog_files();
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('selected');
        }
        document.getElementById("blog_select").classList.add("selected");
    }
    else if (id == "notepad-popup") {
        display_text(type);
    }
    var left = Math.floor(Math.random() * 501) + 250;
    var top = Math.floor(Math.random() * 151) + 5;
    let r = document.getElementById(id)
    let r2 = r.children[0];
    r2.style.top = top + "px";
    r2.style.left = left + "px";
    r.style.display = 'block';
    r2.style.display = 'block';
    bringToFront(r2.id);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function hidePopup(id) {
    let r = document.getElementById(id);
    r.style.display = 'none';
}

