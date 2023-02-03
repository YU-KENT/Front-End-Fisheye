let active = -1;
function modalkeyEscape() {  ////ok
    const modal = document.getElementById("contact_modal"); 
    modal.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            closeModal();}
    })
}


function keyArrowLightbox(){ ///OK
    const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
    const arryLightboxgallery = Array.from(lightboxgallery)
    console.log(arryLightboxgallery)
    lightbox.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight"){
            const AfficheIndex = arryLightboxgallery
                .findIndex(e => e.classList.length == 2);  //find index
             var plus = AfficheIndex + 1;
             if (plus == lightboxgallery.length) { plus = 0 } // last photo to first photo

             lightboxgallery[AfficheIndex].classList.remove("active")
             lightboxgallery[plus].classList.add("active")
            console.log("plus", plus)
        }
            else;
        })
    }



function keyArrowGallery() {  ////ok
    const section = document.querySelector("section")
    let pressed = false;
    section.addEventListener("keydown", (e) => {
        const activeElement = document.activeElement
        const gallery = document.querySelectorAll(".photo")
        const galleryLength = gallery.length
        
        if (e.key == "ArrowRight") {// keboard right,focus prochain photo
            console.log(e.key)
            if (active < galleryLength - 1)
                active += 1;
            gallery[active].focus();
            console.log("right", active)

        }
        else if (e.key == "ArrowLeft") {//keyboard left, focus photo précedent
            if (active > 0) {
                active -= 1;
                gallery[active].focus();
                console.log("left", active)
            }
        }
        else if (e.key == "Enter") {
            if(activeElement.tagName =="DIV"){   //si focused element est un div.photo, ouvret lightbox
            const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
            const dataId = e.target.firstElementChild.getAttribute("data-id")
            console.log("dataId", dataId)
            lightboxgallery[dataId].classList.add("active")
            lightBtns.classList.add("active")}
            else if(activeElement.tagName =="BUTTON"){ // si focused element est un button, add un like
              const number = activeElement.firstElementChild
              if(!pressed){
              number.innerHTML ++;
              pressed = true;}
              else {
              number.innerHTML --;
              pressed = false;
              }  
              calculeSumLikes();               }
        }
    })
}

function Escapelightbox(){
    lightbox.addEventListener("keydown",(e)=>{
    if(e.key =="Escape"){
    console.log("Escape",document.activeElement)

    }


    }
    )}

 function Tester(){

    document.addEventListener("keydown", (e) => {
        console.log("这里",document.activeElement)
    })
} 
 