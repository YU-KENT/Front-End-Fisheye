
let active = -1;
 function keyarrow (){
    const sectionArtciles = document.querySelectorAll(".photographer_section article")    
    const articleLength = sectionArtciles.length 
    console.log("sectionArtciles",sectionArtciles)

document.addEventListener("keydown",(e)=>{

console.log(e.key)
if(e.key == "ArrowRight"){// right
    if(active < articleLength - 1)
    active += 1;
    sectionArtciles[active].focus();
    console.log(active)
    console.log(sectionArtciles[active]);
    }
      
else if(e.key == "ArrowLeft"){//left
    if(active > 0){
    active -= 1;
    sectionArtciles[active].focus();
    console.log(active)
    console.log(sectionArtciles[active]);
   }}
})

 

}