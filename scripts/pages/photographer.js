

const id = new URL(location.href).searchParams.get("id")
const lightbox = document.querySelector(".lightbox_container")
const lightBtns = document.querySelector(".lightbox_buttons")


function getPhotographer(photographersData) {  // récupère data de photographer affiché
    const photographer = photographersData.find((ele) => { return ele.id == id })
    return photographer;
}

function getArryphotos(media) {   // récupère media data de photographer affiché
    const arryPhotos = media.filter((media) => media.photographerId == id);
    return (arryPhotos);
}


function displayHeader(photographer) {
    const pageHeader = document.querySelector(".photograph-header");
    const photographerMode = photographerFactory(photographer);
    const userCardDOM = photographerMode.getUserCardDOM();
    pageHeader.appendChild(userCardDOM);

    document.querySelector(".photograph-header a").removeAttribute("href");
    const price = document.querySelector(".photograph-header .fs-9");
    price.style.display = "none";

};


function addPhotos(photographer,medias) {

    for(i = 0;i < medias.length; i ++){
        const card = mediaFactory(photographer, medias[i]).getPhotosCard();
        const cardSection = document.querySelector(".photos")
        cardSection.appendChild(card);
       }
    
    }

function addDataId(){
        const gallery = document.querySelectorAll(".photo") // get dom image or video
        for(i = 0; i < gallery.length; i ++){
            const gal = gallery[i].firstElementChild
            gal.setAttribute("data-id", i)
           }
        
           }
    


function addlightbox(photographer,filteredMedia) {
    const btnPrev = document.querySelector(".lightbox_prev")
    const btnNext = document.querySelector(".lightbox_next")
    const btnClose = document.querySelector(".lightbox_close")
    
    // creat lightox
    filteredMedia.forEach((media) =>{
    const lightboxCardMode = lightboxFactory(photographer, media)
    const lightboxCard = lightboxCardMode.getLightboxCard()
    lightbox.appendChild(lightboxCard) })
    // l'affichage de photo lightbox
    const lightboxGallery = document.querySelectorAll(".lightbox_affiche")

    const gallery = document.querySelectorAll(".photo");// get images 
    gallery.forEach((gal) => 
            gal.addEventListener("click", e => {  // add function click
            const currentDataId = e.target.getAttribute("data-id")

            lightboxGallery[currentDataId].classList.add("active")
            lightBtns.classList.add("active")
   //close button

    const lightboxAffiche = document.querySelector(".lightbox_affiche.active")
    btnClose.addEventListener("click", () =>{  // function click close button
    lightboxAffiche.classList.remove("active")
    lightBtns.classList.remove ("active")

                                            })
   // button next et button prev
   const arryLightboxGallery = Array.from(lightboxGallery); // transform nodelist to array

    btnNext.addEventListener("click",() =>{   // add click function next
        const AfficheIndex = arryLightboxGallery
        .findIndex(e=> e.classList.length == 2);  //find index

        var plus = AfficheIndex + 1 ;
 
        if (plus == lightboxGallery.length) {plus = 0} // last photo to first photo

        lightboxGallery[AfficheIndex].classList.remove("active")
        lightboxGallery[plus].classList.add("active")
        console.log("下一张",plus)
                                          })

   btnPrev.addEventListener("click",() =>{   // add click function prev
        const AfficheIndex = arryLightboxGallery
        .findIndex(e=> e.classList.length == 2);
            
        var prev = AfficheIndex - 1;
    
        if (AfficheIndex == 0) {prev = lightboxGallery.length - 1} // fist photo to last photo
    
        lightboxGallery[AfficheIndex].classList.remove("active")
        lightboxGallery[prev].classList.add("active") 
                                          })
                                             }))
                                                 }


async function init() {

    const { media } = await getmediaData();// Récupère les datas media
    const { photographers } = await getPhotographersData();// Récuperer les datas photographers
    const photographer = getPhotographer(photographers);// recuperer data de page photographer
    const filteredMedia = getArryphotos(media); // Tableau d'image de photographer affiché
    displayHeader(photographer);  
    addPhotos(photographer,filteredMedia);
    addDataId();
    addlightbox(photographer,filteredMedia);
    const encartMode = encartFactory(photographer,filteredMedia);
    encartMode.addsumLikes(filteredMedia);

}

init();




//lightbox function
//close button
/* const btnClose = document.querySelector("button.lightbox_close")
console.log("关闭",btnClose)
btnClose.addEventListener("click", e =>{
lightbox.classList.remove("active") }) */





/* 
 class media{
    constutor()
 }
const select = document.querySelector("select");
select.addEventListener("change",fliterPhoto);
          function fliterPhoto(medias){
          const {media} = await getmediaData(medias);
          const selectedvalue = select.options[this.selectedIndex].value;
          medias.fliter((media) => media.selectedvalue );
          console.log(medias);
} */

