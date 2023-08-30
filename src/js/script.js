let browse = document.querySelector('.browse');
let browseMenu = document.querySelector('.browseMenu');
let chevDown = document.querySelector('.chevDown');

browse.addEventListener('click', function(){
    if(browseMenu.style.opacity == "1")
        browseMenu.style.opacity = "0"
    else{
        browseMenu.style.opacity = "1"
    }
});

browse.addEventListener('click', function(){
    if(chevDown.style.transform == "rotate(180deg)")
    chevDown.style.transform = "rotate(0deg)"
    else{
        chevDown.style.transform = "rotate(180deg)"
    }
});