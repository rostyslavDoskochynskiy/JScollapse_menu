var nav = document.getElementById("nav");

nav.onmousemove = function (event){
    var target = event.target;
    if (target.className == 'menu-item'){
        var submenu = target.getElementsByClassName("submenu");
        closeMenu();
        submenu[0].style.display = "block";
    }
}

document.onmousemove = function (){
    var target = event.target;
    if (target.className!='menu-item' && target.className!='submenu'){
       closeMenu();
    }
}


function closeMenu(){
    var submenu = document.getElementsByClassName("submenu");
    for(var i = 0; i < submenu.length;i++){
        submenu[i].style.display = "none";
    }
}

