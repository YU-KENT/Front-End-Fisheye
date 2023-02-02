
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


function addLikeByKey(){
    const btnLike = document.querySelectorAll("button.photo_like")
    for(var i = 0; i < btnLike.length; i ++){
    let clicked = false;
    
    btnLike[i].addEventListener("keydown",(e) =>{
    const number = e.target.parentNode.firstElementChild
    console.log("number",number )
    if(e.key == "Enter"){
    clicked = true;
    number.innerHTML ++;
    console.log(clicked)
    }
    else {
    clicked = false;
    number.innerHTML --;   }
    
    calculeSumLikes()                        })}}


function keyArrowAlbum(){


}
function keyArrowGallery(){
    const section = document.querySelector("section")
    section.addEventListener("keydown",(e)=>{
    const gallery = document.querySelectorAll(".photo")
    const galleryLength = gallery.length

    if(e.key == "ArrowRight"){// right
        console.log(e.key)
       if(active < galleryLength - 1)
        active += 1;
        gallery[active].focus();
        console.log("right",active) 
        
        }
    else  if(e.key == "ArrowLeft"){//left
        if(active > 0){
        active -= 1;
        gallery[active].focus();
        console.log("left",active)
       }} 
    else if(e.key == "Enter"){
        const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
        const dataId = e.target.firstElementChild.getAttribute("data-id")
        console.log("dataId",dataId)
        lightboxgallery[dataId].classList.add("active")
        lightBtns.classList.add("active")
        const btnClose = document.querySelector(".lightbox_buttons.active .lightbox_close")
        btnClose.focus();
    }
    
   
    })
}



