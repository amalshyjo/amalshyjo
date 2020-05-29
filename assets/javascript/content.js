function openNav() {
    var element = document.getElementById("navcheck");
    
    if (element.classList.contains('active')){
        document.getElementById("myNav").style.height = "100%";

        
    }
    else if (!element.classList.contains('active')){
        document.getElementById("myNav").style.height = "0%";
    }
}

