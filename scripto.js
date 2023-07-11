let current = document.body.id;
let getNav = document.getElementsByTagName('nav')[0];
let currentLi = getNav.getElementsByClassName(current)[0];
let getA = currentLi.getElementsByTagName('a')[0];
let cambiarColor = () => {getA.style.color = 'yellow'};
cambiarColor();



