let active = -1;
function modalkeyEscape() {  ////ok
    const modal = document.getElementById("contact_modal"); 
    modal.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            closeModal();}
    })
}





function keyArrowGallery() {  ////ok
    const section = document.querySelector("section")
    
    let pressed = false;
    section.addEventListener("keydown", (e) => {
        const activeElement = document.activeElement
        const gallery = document.querySelectorAll(".photo")
        const galleryLength = gallery.length
        const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
        

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
        }else if (e.key == "Enter") {
            if(activeElement.getAttribute("class") =="photo"){   //si focused element est un div.photo, ouvret lightbox
            const dataId = e.target.firstElementChild.getAttribute("data-id");
            lightboxgallery[dataId].classList.add("active");
            lightboxBtns.classList.add("active");
            lightboxgallery[dataId].firstElementChild.firstElementChild.focus();
        }else if(activeElement.tagName =="BUTTON"){ // si focused element est un button, add un like
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
    })}


    function keyArrowLightbox(){ ///OK
        const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
        const arryLightboxgallery = Array.from(lightboxgallery)
        console.log(arryLightboxgallery)
     
       
    
    lightboxParent.addEventListener("keydown",(e)=>{
        const gallery = document.querySelectorAll(".photo")
        const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
        const arryLightboxgallery = Array.from(lightboxgallery)
        const AfficheIndex = arryLightboxgallery
            .findIndex(e => e.classList.length == 2);
      
        
        if(e.key == "Escape"){  // appuye "Escape" pour fermer lightbox photo
            lightboxBtns.classList.remove("active")
            lightboxgallery[AfficheIndex].classList.remove("active")
            removeActive(); 
            gallery[AfficheIndex].focus();


          }else if(e.key == "ArrowRight"){
            var plus = AfficheIndex + 1;
            if (plus < lightboxgallery.length) {  // last photo to first photo
            lightboxgallery[AfficheIndex].classList.remove("active");
            lightboxgallery[plus].classList.add("active");
            lightboxgallery[plus].firstElementChild.firstElementChild.focus();
            console.log("plus", plus)
            } else return;
        }else if(e.key == "ArrowLeft"){
            var prev = AfficheIndex - 1;
            if (AfficheIndex > 0) {  // fist photo to last photo
            lightboxgallery[AfficheIndex].classList.remove("active");
            lightboxgallery[prev].classList.add("active");
            lightboxgallery[prev].firstElementChild.firstElementChild.focus();
           }else return;
        } 



    }) 
  lightboxBtns.addEventListener("keydown",closeBykey); 

     function closeBykey(e){
        const gallery = document.querySelectorAll(".photo")
        if(e.key == "Enter"){
            const AfficheIndex = arryLightboxgallery
            .findIndex(e => e.classList.length == 2);
            lightboxBtns.classList.remove("active");
            console.log("AfficheIndex",AfficheIndex)
            /* lightboxgallery[AfficheIndex].classList.remove("active") */
            removeActive();
            gallery[AfficheIndex].focus();
        }
    
    } 
        
    }
    
           




 function Tester(){

    document.addEventListener("keydown", (e) => {
        console.log("这里",document.activeElement)
    })
} 
 