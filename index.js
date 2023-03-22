var isVisible = false;
const skills = [
  {
      "skill": "JavaScript",
      "percent": 90,
      "backgroundColor": "violet"
  },
  {
      "skill": "CSS",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "HTML",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "React",
      "percent": 90,
      "backgroundColor": "violet"
  },
  {
      "skill": "NextJS",
      "percent": 90,
      "backgroundColor": "violet"
  },
  {
      "skill": "Express",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "Fastify",
      "percent": 70,
      "backgroundColor": "violet"
  },
  {
      "skill": "Python",
      "percent": 60,
      "backgroundColor": "violet"
  },
  {
      "skill": "SCSS",
      "percent": 60,
      "backgroundColor": "violet"
  },
  {
      "skill": "GIT",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "Typescript",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "GraphQL",
      "percent": 70,
      "backgroundColor": "violet"
  },
  {
      "skill": "Docker",
      "percent": 50,
      "backgroundColor": "violet"
  },
  {
      "skill": "Node JS",
      "percent": 90,
      "backgroundColor": "violet"
  },
  {
      "skill": "MySQL",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "Postgres",
      "percent": 80,
      "backgroundColor": "violet"
  },
  {
      "skill": "AWS",
      "percent": 60,
      "backgroundColor": "violet"
  },
  {
      "skill": "OOP",
      "percent": 90,
      "backgroundColor": "violet"
  },
  {
      "skill": "Stripe",
      "percent": 50,
      "backgroundColor": "violet"
  }
]

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
      navElement.classList.remove('is-active');
      linkElements.classList.remove('is-active');
      document.body.classList.remove('minimal-opacity')
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

  const skillBarsContainer = document.getElementById('skill-bars');
  skills.forEach(function(skill) {
    const skillBar = document.createElement('div');
    skillBar.dataset['percent'] = `${skill.percent}%`;
    skillBar.classList.add('skill-bar');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('skill-title');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = skill.skill;
    const progressText = document.createElement('div');
    progressText.classList.add('progress-text');
    progressText.innerText = `${skill.percent}%`;
    titleContainer.appendChild(title);
    titleContainer.appendChild(progressText);
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('skill-progress');
    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.backgroundColor = skill.backgroundColor;
    // const skillPercent = document.createElement('div');
    // skillPercent.classList.add('skill-percent'); 
    // skillPercent.innerText = `${skill.percent}%`;
    progressContainer.appendChild(progress);
    // progressContainer.appendChild(skillPercent);
    skillBar.appendChild(titleContainer);
    skillBar.appendChild(progressContainer);
    skillBarsContainer.appendChild(skillBar);
  })
  window.onscroll = function () {
    const height = window.innerHeight;
    const scrollTop = window.scrollY;
    const elements = document.getElementsByClassName('skill-bar');
    for(let i=0; i < elements.length; i++) {
      const element = elements.item(i);
      const progressBar = element.getElementsByClassName('progress').item(0);
      if(scrollTop >= height - 200 && scrollTop < (2 * (height)) + 100){
        progressBar.style.width = element.getAttribute('data-percent');
      } else {
        progressBar.style.width = 0;
      }
    }
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

  // skill text globe
  const myTags = skills.map(skill => skill.skill);
  var tagCloud = TagCloud('#text-globe', myTags,{
    // radius in px
    radius: 250,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true
  });
}