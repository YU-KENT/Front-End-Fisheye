

const id = new URL(location.href).searchParams.get("id")
const lightbox = document.querySelector(".lightbox_container")
const lightboxBtns = document.querySelector(".lightbox_buttons")


function getPhotographer(photographersData) {  // récupère data de photographer affiché
    const photographer = photographersData.find((ele) => { return ele.id == id })
    return photographer;
}

function getArryphotos(media) {   // récupère media data de photographer affiché
    const arryPhotos = media.filter((media) => media.photographerId == id);
    return (arryPhotos);
}

function displayHeader(photographer) { // afficher l'artcile de photographer dans header
    const pageHeader = document.querySelector(".photograph-header");
    const photographerMode = photographerFactory(photographer);
    const headerCardDOM = photographerMode.getheaderCardDOM();
    pageHeader.appendChild(headerCardDOM);
    pageHeader.setAttribute("aria-label","les information de photographer "+ photographer.name)
}
function addDataId() {  //rajouter "data-id" a chaque photo pour afficher le lightbox plus tard
    const gallery = document.querySelectorAll(".photo") // get dom image or video
    for (let i = 0; i < gallery.length; i++) {
        const gal = gallery[i].firstElementChild
        gal.setAttribute("data-id", i);
    }
}

function addPhotos(photographer, medias) { //creat l'abulm photo
    const cardSection = document.querySelector(".photos")
    medias.forEach((media) => {
        const card = mediaFactory(photographer, media).getPhotosCard();
        cardSection.appendChild(card);
    })
    addDataId();
}


function addlightbox(photographer, myArray) { // method
    const btnPrev = document.querySelector(".lightbox_prev")
    const btnNext = document.querySelector(".lightbox_next")

    // creer un album de photos de lightbox
    myArray.forEach((media) => {
        const lightboxCardMode = lightboxFactory(photographer, media)
        const lightboxCard = lightboxCardMode.getLightboxCard()
        lightbox.appendChild(lightboxCard)
    })

    // l'affichage de photo lightbox
    const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
    const gallery = document.querySelectorAll(".photo");// get images 

    gallery.forEach((gal) => gal.addEventListener("click", openLightbox));
    function openLightbox(e) {  // add function open lightbox
        const currentDataId = e.target.getAttribute("data-id")
        var lightboxDisplaySetting = window.getComputedStyle(lightbox, null).getPropertyValue("display");
        if (lightboxDisplaySetting == 'none') {
            lightbox.style.display = "block";
            lightboxgallery[currentDataId].classList.add("active");
            lightboxBtns.classList.add("active");
        } else {
            lightboxgallery[currentDataId].classList.add("active"); // data-id egale l'index de album lightbox
            lightboxBtns.classList.add("active")
        }

        // button next et button prev
        const arryLightboxgallery = Array.from(lightboxgallery); // transform nodelist à l'array
        btnNext.addEventListener("click", next)
        function next() {   // rajoute le fonction click "next"
            const AfficheIndex = arryLightboxgallery
                .findIndex(e => e.classList.length == 2);  //touve index de lightbox photo affiché
            var plus = AfficheIndex + 1;
            if (plus < lightboxgallery.length) {  
                lightboxgallery[AfficheIndex].classList.remove("active")
                lightboxgallery[plus].classList.add("active")
            } else return;
        }

        btnPrev.addEventListener("click", prev);   // rajoute click fonction "prev"
        function prev() {
            const AfficheIndex = arryLightboxgallery
                .findIndex(e => e.classList.length == 2);
            var prev = AfficheIndex - 1;
            if (AfficheIndex > 0) {  
                lightboxgallery[AfficheIndex].classList.remove("active")
                lightboxgallery[prev].classList.add("active")
            } else return;

        }

        //fonction button close
        const btnClose = document.querySelector(".lightbox_buttons.active .lightbox_close")
        btnClose.addEventListener("click", closeLightbox)

        function closeLightbox(e) {
           
            var lightboxDisplaySetting = window.getComputedStyle(lightbox, null).getPropertyValue("display");
            var lightBtnsDisplaySetting = window.getComputedStyle(lightboxBtns, null).getPropertyValue("display");
            // recupere style "display"
            
            if (lightboxDisplaySetting == 'block') {
                if (lightBtnsDisplaySetting == 'flex') {
                    lightbox.style.display = "none";
                    lightboxBtns.classList.remove("active")
                    removeActive();
                } else {
                    lightbox.style.display = "none";
                }
            } else {
                lightbox.style.display = "block"
            }
            e.preventDefault();
            btnNext.removeEventListener("click", next);  // quand fermer lightbox
            btnPrev.removeEventListener("click", prev);//surprimer les tâches des event
        }}
        calculeSumLikes();
}

function removeActive() { //surprimer class"active" de lightbox photo
    const allActive = document.querySelectorAll(".lightbox .active")
    allActive.forEach((active) => active.classList.remove("active"))
}


function cleanPhotos() { //surprimer l'abulm photo
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

function cleanLightBoxPhotos() { //surprimer lightbox photo
    const emptyLightBox = ``
    lightbox.innerHTML = emptyLightBox;
}
function addLike() { //fonction rajoute un seul like
    const btnLike = document.querySelectorAll("button.photo_like")
    for (let i = 0; i < btnLike.length; i++) {
        let clicked = false;

        btnLike[i].addEventListener("click", add)
        function add(e) {
            const number = e.target.parentNode.firstElementChild
            if (!clicked) {
                clicked = true;
                number.innerHTML++;
                calculeSumLikes();
            } else {  //si click encore, redure un like
                clicked = false;
                number.innerHTML--;
                calculeSumLikes();
            }
        }
    }
}
function calculeSumLikes() {  //calule total likes
    const divLike = document.getElementById("totallikes")
    const numLikes = document.querySelectorAll("button .like")

    let sum = 0;
    for (let i = 0; i < numLikes.length; i++) {
        sum += numLikes[i].innerHTML * 1;
    }
    console.log(sum)
    divLike.innerHTML = sum;
    divLike.setAttribute("aria-label","le photographe a "+ sum +"total like")
}


function filterMedia(photographer, media) { 
    addlightbox(photographer, media);
    addLike();

   // creer 3 tableaux
    var myArray1 = []; 
    myArray1 = media.slice()
    var myArray2 = [];
    myArray2 = media.slice()
    var myArray3 = [];
    myArray3 = media.slice()

    function triLike(myArray) { //trier le tableau par nom de likes
        return myArray.sort((a, b) => b.likes - a.likes);
    }
    function triDate(myArray) {
        myArray.sort((a, b) => { //trier le tableau par la date plus récente
            const bDate = new Date((b.date).replace(/-/g, "/"))
            const aDate = new Date((a.date).replace(/-/g, "/"))
            return bDate - aDate
        })
    }
    function triTitle(myArray) { //trier le tableau par premier lettre de titre
        myArray.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
    }

    console.log("triByTitle", myArray3)
    console.log("triByLike", myArray1)
    console.log("triByDate", myArray2)
    console.log("media", media)

    const options = document.querySelector('.options');
    const label = document.querySelector('.pre-option');
    options.addEventListener("click", clickFilter);
    options.addEventListener("keydown", keyboardFilter);

    function clickFilter(e) {  // fonction click pour tirer
        if (e.target.textContent == "Popularité") {
            triLike(myArray1)
            cleanPhotos();
            addPhotos(photographer, myArray1)
            addDataId();
            cleanLightBoxPhotos();
            addlightbox(photographer, myArray1);
            addLike();


        } else if (e.target.textContent == "Date") {
            triDate(myArray2);
            cleanPhotos();
            addPhotos(photographer, myArray2);
            addDataId();
            cleanLightBoxPhotos();
            addlightbox(photographer, myArray2);
            addLike();

        } else if (e.target.textContent == "Titre") {
            triTitle(myArray3)
            cleanPhotos();
            addPhotos(photographer, myArray3);
            addDataId();
            cleanLightBoxPhotos();
            addlightbox(photographer, myArray3);
            addLike();
        }
    }
    function keyboardFilter(e) {  // fonction keyboard pour tirer
        if (e.key == "Enter") {
            if (e.target.textContent == "Popularité") {
                triLike(myArray1);
                cleanPhotos();
                addPhotos(photographer, myArray1)
                addDataId();
                cleanLightBoxPhotos();
                addlightbox(photographer, myArray1);
                addLike();

                label.textContent = "Popularité"; // fermer dropdown menu
                options.setAttribute('hidden', true);
                label.removeAttribute('hidden');

            } else if (e.target.textContent == "Date") {
                triLike(myArray2);
                cleanPhotos();
                addPhotos(photographer, myArray2);
                addDataId();
                cleanLightBoxPhotos();
                addlightbox(photographer, myArray2);
                addLike();

                label.textContent = "Date";
                options.setAttribute('hidden', true);
                label.removeAttribute('hidden');

            } else if (e.target.textContent == "Titre") {
                triLike(myArray3);
                cleanPhotos();
                addPhotos(photographer, myArray3);
                addDataId();
                cleanLightBoxPhotos();
                addlightbox(photographer, myArray3);
                addLike();

                label.textContent = "Titre";
                options.setAttribute('hidden', true);
                label.removeAttribute('hidden');
            }}}
}

async function init() {

    const { media } = await getmediaData();// Récupère les datas media
    const { photographers } = await getPhotographersData();// Récuperer les datas photographers
    const photographer = getPhotographer(photographers);// recuperer data de page photographer
    const filteredMedia = getArryphotos(media); // Tableau d'image de photographer affiché
    displayHeader(photographer);
    addPhotos(photographer, filteredMedia);
    encartFactory(photographer);
    filterMedia(photographer, filteredMedia);
    keyArrowGallery(); 
    keyArrowLightbox();
    focusInsidePage();

}

init();

