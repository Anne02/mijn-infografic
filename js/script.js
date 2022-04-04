//de code werkt het beste met Safari en Firefox Developer

let windowHeight = window.innerHeight;
let windowTop = window.pageYOffset;
let windowBottom = windowTop + windowHeight;

//deze functie kijkt wanneer wat in beeld is
function checkInView() {
    windowHeight = window.innerHeight;
    windowTop = window.pageYOffset;
    windowBottom = windowTop + windowHeight;

    //ik geef de juiste combinatie aan van de afbeeling met de animatie
    animationClass('.tkd1', 'tkslide1');
    animationClass('.tkd2', 'tkslide2');
    animationClass('.denkwolk', 'denkeranimation');
    animationClass('.zoveel', 'zoveel-animation');
    animationClass('.pijltje', 'pijltje-animation');
    animationClass('.potlood', 'potlood-animation');
    animationClass('.pijleind', 'pijleind-animation');
}


function animationClass(elementName, className) {
    let elements = document.querySelectorAll(elementName);

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        //zorgt ervoor dat hij alles bij langs gaat
        let elementProps = element.getBoundingClientRect();
        console.log(`element top:${elementProps.bottom}, window height:${windowHeight}`);
        //de console.log laat waarden zien
        if (elementProps.top < windowHeight && elementProps.bottom > 0)
            element.classList.add(className);
        //else
        //element.classList.remove(className);
        //ik wil dat mijn animatie niet nog een keer afspeeld
    }
}
//wanner ik op de juiste plek ben gescrolld dan komt de animatie in beeld. 
window.addEventListener("scroll", checkInView);