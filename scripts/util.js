function setCurrentTime(){
    let a;
    let time;
    a = new Date();

    let h = a.getHours() % 12;
    h = h == 0 ? 12 : h;
    h = h < 10 ? "0" + h : h;
    
    let m = a.getMinutes();
    m = m < 10 ? "0" + m : m;

    let q = a.getHours() > 11 ? "PM" : "AM";

    let s = a.getSeconds();
    s = s < 10 ? "0" + s : s;

    time = h + ':' + m + ":" + s + " " + q;
    document.getElementById('time').innerHTML = time;
}

setCurrentTime();
setInterval(() => {
    setCurrentTime();
}, 1000);

// Get all li elements
    function allLIsClick(){
      const listItems = document.querySelectorAll('li');

      // Add the click event listener to each li
      listItems.forEach(function(li) {
          li.addEventListener('click', function (e) {handleClick(e)});
          li.addEventListener('dblclick', function (e) {handleDoubleClick(e)});
      });
    }

    // Function to handle the click event
    function handleDoubleClick(event) {
      var elems = document.getElementsByClassName("selected");
      for(var i = 0; i < elems.length; i++){
        elems[i].classList.remove('selected');
      }
      if(event.detail > 1){
        document.getElementById(event.srcElement.id).classList.add("selected");
      }
        }

    allLIsClick();


showPopup(null, "sticky-popup", "sticky")

window.addEventListener('resize', function() {
  const newWidth = window.innerWidth;
  const grid = document.querySelector('custom-icon-grid');
  const allDropSpots = [...grid.dropSpots];
  if(newWidth <= 1200){
    let n = (newWidth - 119) / 120;
    for (const spot of allDropSpots) {
      let num = parseInt(spot.id.substring(3)) % 100;
      if(num > n){
        spot.style.setProperty('display', 'none', 'important');
        spot.style.width = '0px';
        spot.style.height = '0px';
        spot.style.padding = '0px';
      } 
      else{
        spot.style.display = 'block';
        spot.style.width = '100px';
        spot.style.height = '100px';
        spot.style.padding = '10px';
      }
    }
  }
  else {
    for (const spot of allDropSpots) {
      spot.style.display = 'none';
    }
  }
});