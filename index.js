var isVisible = false;

function init() {
  // navbar click handler
  const navElement = document.getElementById('nav');
  const linkElements = document.getElementById('nav-links');
  navElement.onclick = function () {
    navElement.classList.toggle('is-active');
    linkElements.classList.toggle('is-active');
    document.body.classList.toggle('minimal-opacity')
  }
  // global onclik handler 
  document.body.onclick = function (e) {
    if(e.target.closest('#nav') === null) {
      navElement.classList.toggle('is-active');
      linkElements.classList.toggle('is-active');
      document.body.classList.toggle('minimal-opacity')
    }
  }
  // handling span clicks
  const elements = [];
  for(const element of linkElements.childNodes) {
    if(element.nodeName.toLowerCase() === 'span') elements.push(element);
  }
  // calculating the angle for each element in the navbar
  const angleDiff = 15;
  const lengthOfElements = elements.length;
  for(let i = 0; i < lengthOfElements; i++) {
    elements[i].style.transform = `rotate(${((lengthOfElements - i -1)) * angleDiff}deg) translateY(${(lengthOfElements - i - 1) * -13}px) translateX(${(lengthOfElements - i - 1) * 5}px)`
  }

  // mouse tracker
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

  document.onmousemove = function(e) {
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  }

  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    var element = document.getElementById('circle')
    element.style.left = xp + 'px';
    element.style.top = yp + 'px'
  }, 20);
}