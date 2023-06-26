
// -----------active-tab-link-----------------------------------------------
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");


  
}

      // -------------------dark-white mode theme-----------------------------------
      var icon = document.getElementById("icon");
    function theme(){
        console.log('Ankush clicked me');
        document.body.classList.toggle("white-theme");
        if(document.body.classList.contains("white-theme")){
            icon.src = "images/moon.png";
        }
        else{
            icon.src = "images/sun.png";
        }
    }


var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}