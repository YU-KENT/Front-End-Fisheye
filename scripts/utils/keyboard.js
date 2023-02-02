
let active = -1;
function keyarrowLeftRight (){

document.addEventListener("keydown",(e)=>{
    const sectionArtciles = document.querySelectorAll(".photographer_section article a")    
    const articleLength = sectionArtciles.length 
    
if(e.key == "ArrowRight"){// right
    if(active < articleLength - 1)
    active += 1;
    sectionArtciles[active].focus();
    console.log("right",active)
    
    }
else if(e.key == "ArrowLeft"){//left
    if(active > 0){
    active -= 1;
    sectionArtciles[active].focus();
    console.log("left",active)
   }}

})






}

function keyEscape(){
    /* const modal = document.getElementById("contact_modal"); */
    const btnCross = document.querySelector(".modal header img")
    document.addEventListener("keydown",(e)=>{
    
    var focused = false    
    if(e.key == "Escape"){
        
     btnCross.focus();
     focused = true;
     
    }
    else if (e.key == "Enter" && focused){
        closeModal();
        console.log(focused)   }
    

                            })

}