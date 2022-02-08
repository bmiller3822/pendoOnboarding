console.log("JS is linked")

var badge = document.getElementById('badgeIdHere');
var i=5;

while (i>0){
    if(badge.addEventListener("click",()=>{
        i--;
    }));       
}

if(i==0){
    badge.classList.add('hidden') //display:none would be used in the CSS perhaps
} 

if (pendo.showGuideById('guideIdHere')=='true'){
    badge.classList.add('hidden')
}