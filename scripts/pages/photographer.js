

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
    const cardSection = document.querySelector(".photos")
    medias.forEach((media) =>{ 
         const card = mediaFactory(photographer, media).getPhotosCard();
         cardSection.appendChild(card);
         
        
                               })  
                        
                                        }

function addDataId(){
        const gallery = document.querySelectorAll(".photo") // get dom image or video
        console.log("gallery1",gallery)
        for(i = 0; i < gallery.length; i ++){
            const gal = gallery[i].firstElementChild
            gal.setAttribute("data-id", i);
           }
           }
    
function addlightbox(photographer,filteredMedia) {
    const btnPrev = document.querySelector(".lightbox_prev")
    const btnNext = document.querySelector(".lightbox_next")
    // creat lightox
    filteredMedia.forEach((media) =>{
    const lightboxCardMode = lightboxFactory(photographer, media)
    const lightboxCard = lightboxCardMode.getLightboxCard()
    lightbox.appendChild(lightboxCard) })
    
    // l'affichage de photo lightbox
    const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
    const gallery = document.querySelectorAll(".photo");// get images 
    console.log("gallery",gallery)
    gallery.forEach((gal) => gal.addEventListener("click", e=> {  // add function open lightbox
            console.log("KKK")
        const currentDataId = e.target.getAttribute("data-id")
            console.log("currentDataId",currentDataId)
            lightboxgallery[currentDataId].classList.add("active")
            lightBtns.classList.add("active")
   
   // button next et button prev
   const arryLightboxgallery = Array.from(lightboxgallery); // transform nodelist to array

    btnNext.addEventListener("click",next) 
        function next() {   // add click function next
        const AfficheIndex = arryLightboxgallery
        .findIndex(e=> e.classList.length == 2);  //find index

        var plus = AfficheIndex + 1 ;
 
        if (plus == lightboxgallery.length) {plus = 0} // last photo to first photo

        lightboxgallery[AfficheIndex].classList.remove("active")
        lightboxgallery[plus].classList.add("active")
        console.log("plus",plus)
                            }

   btnPrev.addEventListener("click",prev)   // add click function prev
   function prev (){const AfficheIndex = arryLightboxgallery
        .findIndex(e=> e.classList.length == 2);
            
        var prev = AfficheIndex - 1;
    
        if (AfficheIndex == 0) {prev = lightboxgallery.length - 1} // fist photo to last photo
        lightboxgallery[AfficheIndex].classList.remove("active")
        lightboxgallery[prev].classList.add("active") 
        
                    }
     //close button
     
     
     const btnClose = document.querySelector(".lightbox_buttons.active .lightbox_close")
        console.log("btnClose",btnClose)
        btnClose.addEventListener("click", () =>{  // function click close button
        const lightboxAffiche = document.querySelector(".lightbox_affiche.active")
        console.log("lightboxAffiche",lightboxAffiche)
        lightboxAffiche.classList.remove("active")
        lightBtns.classList.remove("active")
        btnNext.removeEventListener("click",next)
        btnPrev.removeEventListener("click",prev) 
                                                }) 
                                             }))

                                                 }
 function cleanPhotos() {
    const section = document.querySelector("section")
    
    const emptyPhotosFrom = `<div class="encart">
                                <div class="encart_likes">
                                <span id="totallikes"></span>
                                <img src="assets/icons/heart_black.svg">
                                </div>
                                <span id="encart_price">300€/jour</span>      
                            </div>
                          `
    section.innerHTML = emptyPhotosFrom;
                        }            
                      

function filter(photographer,media){
    const select = document.querySelector("select"); 
   
    var myArray1 = [];
    myArray1 = media.slice()
    var myArray2 = [];
    myArray2 = media.slice()
    var myArray3 = [];
    myArray3 = media.slice()

    function triLike(myArray){
        return myArray.sort((a,b) => b.likes - a.likes);
                           };
    function triDate(myArray){
        myArray.sort((a,b) => {
                const bDate = new Date((b.date).replace(/-/g,"/"))
                const aDate = new Date((a.date).replace(/-/g,"/"))
        return bDate - aDate
                            }) } ;
    function triTitle(myArray){
        myArray.sort((a,b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))} ;

    console.log("myArray3",myArray3)
    console.log("myArray1",myArray1)
    console.log("myArray2",myArray2)
    triLike(myArray1)
    triDate(myArray2);
    triTitle(myArray3)
    cleanPhotos();
    addPhotos(photographer,myArray1) ;

 
     select.addEventListener("change",() => { 

        if (select.value == "Popularité"){
         
            cleanPhotos();
            addPhotos(photographer,myArray1) 
                                       }
        else if(select.value == "Date"){

            cleanPhotos();
            addPhotos(photographer,myArray2)
                                    }
        else if(select.value == "Titre"){
            
            cleanPhotos();
            addPhotos(photographer,myArray3)
                                       }
        })  
  
    }


   function addLike(){
    const btnLike = document.querySelectorAll("button.photo_like")
    for(var i = 0; i < btnLike.length; i ++){
    let clicked = false;
    
    btnLike[i].addEventListener("click",(e) =>{
    const number = e.target.parentNode.firstElementChild
    if(!clicked ){
    clicked = true;
    number.innerHTML ++;
    }
    else {
    clicked = false;
    number.innerHTML --;   }
    
    calculeSumLikes()                        })}}
    
    function calculeSumLikes(){  //calule total likes
        const divLike = document.getElementById("totallikes")
        const numLikes = document.querySelectorAll("button .like")
        
        let sum = 0;
        for (i = 0; i < numLikes.length; i++ ){
        sum += numLikes[i].innerHTML * 1 ;
        }
        console.log(sum)
        divLike.innerHTML = sum;  

        } 

async function init() {

    const { media } = await getmediaData();// Récupère les datas media
    const { photographers } = await getPhotographersData();// Récuperer les datas photographers
    const photographer = getPhotographer(photographers);// recuperer data de page photographer
    const filteredMedia = getArryphotos(media); // Tableau d'image de photographer affiché
    displayHeader(photographer);  
    addPhotos(photographer,filteredMedia);
    
    
    encartFactory(photographer);
    filter(photographer,filteredMedia);
    addDataId();
    addlightbox(photographer,filteredMedia);
    addLike();
    calculeSumLikes();
}

init();

// select-box, function arrow rotate
const select = document.getElementById("select-box")
const arrow = document.querySelector(".select.arrow")
let style1 = document.createElement("style");
let style2 = document.createElement("style");
let text1 = document.createTextNode(".arrow::after{transform:rotate(180deg)}");
let text2 = document.createTextNode(".arrow::after{transform:rotate(360deg)}");
style1.appendChild(text1); 
style2.appendChild(text2);
let n = 0
select.addEventListener("click",(e) =>{
    e.preventDefault();
if(n%2 == 0){
    n += 1 ;
    console.log("180deg",n)
    arrow.appendChild(style1)}
else {
    n += 1
    arrow.appendChild(style2)
    console.log("360deg")}
})