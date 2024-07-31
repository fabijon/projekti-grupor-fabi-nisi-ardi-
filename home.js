function openmenu(){
    var media = document.querySelector(".navbar-media")
    media.style.display ="block";
    var desktop = document.querySelector(".navbar-desktop");
    desktop.style.display="none";
}

function closemenu(){
    var desktop = document.querySelector(".navbar-desktop");
    desktop.style.display="block";
    var media = document.querySelector(".navbar-media");
    media.style.display ="none";
}
