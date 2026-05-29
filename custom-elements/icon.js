class Icon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const name = this.getAttribute("name");
        const n = name.replace(' ', '-').toLowerCase();
        const src = this.getAttribute("src");
        const href = this.getAttribute("href");

        this.id = `link-${n}`;
        this.setAttribute("draggable", "true");
        this.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("text", this.id);
        });

        this.shadowRoot.innerHTML = href ?
        `<a part="draggableLink" target="blank_" href="${href}"> 
            <img part="iconImg" src="${src}"/> 
            ${name} 
        </a>` : 
        `<a part="draggableLink" onclick="showPopup(null, '${n}-popup', '${n}')"> 
            <img part="iconImg" src="${src}"/> 
            ${name} 
        </a>`;
    }
}

customElements.define("custom-icon", Icon);