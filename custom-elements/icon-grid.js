class IconGrid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const grid = document.createElement("div");
        grid.setAttribute("part", "iconGrid");

        const cols = this.getAttribute("cols")
        const rows = this.getAttribute("rows");

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){

                const newWidth = window.innerWidth;
                const n = (newWidth - 119) / 120;

                const cell = document.createElement("div");
                cell.setAttribute("id", "div"+r*cols+c)

                if(c > n){
                    cell.style.setProperty("display", "none", "important")
                }
                cell.setAttribute("part", "dropSpot");
                cell.setAttribute("ondrop", "drop(event)");
                cell.setAttribute("ondragover", "allowDrop(event)");

                const slot = document.createElement("slot");
                slot.name = `slot-${r}-${c}`

                cell.appendChild(slot)
                grid.appendChild(cell);

            }
        }
        this.shadowRoot.append(grid);
    }
    get dropSpots() {
        return this.shadowRoot.querySelectorAll('[part="dropSpot"]');
    }
}

customElements.define("custom-icon-grid", IconGrid);