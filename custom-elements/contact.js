class Contact extends Popup{
    constructor(){
        super();
    }
    connectedCallback() {
        this.id = "contact-popup";
        this.innerHTML =
        `<div class="popup" onclick="bringToFront('contact-popup-inner')" id="contact-popup-inner">
        <div id="contact-popup-header" class="popup-header">Contact
          <div class="window-controls">
            <span onclick="hidePopup('contact-popup')"><i class="fa fa-window-minimize"></i></span>
            <span onclick="hidePopup('contact-popup')"><i class="fa fa-window-maximize"></i></span>
            <span onclick="hidePopup('contact-popup')"><i class="fa fa-close"></i></span>
          </div>
        </div>
        <form name="contact" onsubmit="handleSubmit(event)">
          <div class="form-group">
            <label for="first">
              <span class="first-letter">F</span>irst Name:
            </label>
            <input id="first" name="first" type="text" required/>
          </div>

          <div class="form-group">
            <label for="last">
              <span class="first-letter">L</span>ast Name:
            </label>
            <input id="last" name="last" type="text" required/>
          </div>

          <div class="form-group">
            <label for="email">
              <span class="first-letter">E</span>mail:
            </label>
            <input id="email" name="email" type="email" required/>
          </div>

          <div class="form-group">
            <label for="message">
              <span class="first-letter">M</span>essage:
            </label>
            <textarea id="message" name="message"></textarea>
          </div>

          <button> OK </button>
        </form>
      </div>`;
      dragElement(document.getElementById("contact-popup-inner"));
    }
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target; // 👈 Get the form that was submitted
  const formData = new FormData(form);
  formData.append('form-name', 'contact'); // must match hidden form name

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });
    alert('Form submitted successfully!');
  } catch (err) {
    alert('Error: ' + err);
  }
};



customElements.define("contact-popup", Contact);