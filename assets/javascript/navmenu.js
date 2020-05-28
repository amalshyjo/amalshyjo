
/* Open */
function openNav() {
    var element = document.getElementById("navcheck");
    
    
    if (element.classList == ("active")){
        document.getElementById("myNav").style.height = "100%";
    }
    else{
       
        document.getElementById("myNav").style.height = "0%";
    }
}
