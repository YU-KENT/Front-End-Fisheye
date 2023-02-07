
function modalkeyEscape() {  // appuye "Escape" pour fermer le modal contact form
    const modal = document.getElementById("contact_modal");
    const btnContact = document.querySelector(".contact_button")
    modal.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            closeModal();
            btnContact.focus();
        }
    })
}

let active = -1;
function keyArrowGallery() {  /// fonction keyboard pour l'abulm photo
    const section = document.querySelector("section")
    let pressed = false;
    section.addEventListener("keydown", (e) => {
        const activeElement = document.activeElement
        const gallery = document.querySelectorAll(".photo")
        const galleryLength = gallery.length
        const lightboxgallery = document.querySelectorAll(".lightbox_affiche")

        
        if (e.key == "ArrowRight") {//appuye "right",focus le prochain photo
            if (active < galleryLength - 1)
                active += 1;
            gallery[active].focus();

        }
        else if (e.key == "ArrowLeft") {//appuye "Left", focus photo précedent
            if (active > 0) {
                active -= 1;
                gallery[active].focus();
            }
        } else if (e.key == "Enter") { //appupe "Enter" pour ouvrir lightbox photo et rajouter un like
            if (activeElement.getAttribute("class") == "photo") {   //si focused element est un div.photo
                const dataId = e.target.firstElementChild.getAttribute("data-id");
                removeActive();
                lightboxgallery[dataId].classList.add("active");
                lightboxBtns.classList.add("active");
                lightboxgallery[dataId].firstElementChild.firstElementChild.focus();
            } else if (activeElement.tagName == "BUTTON") { // si focused element est un button, add un like
                const number = activeElement.firstElementChild
                if (!pressed) {
                    number.innerHTML++; 
                    pressed = true;
                }
                else {
                    number.innerHTML--;
                    pressed = false;
                }
                calculeSumLikes();
            }}
      })
    
}


function keyArrowLightbox() { ///fonction keyboard pour lightbox
    const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
    const arryLightboxgallery = Array.from(lightboxgallery)
    const lightboxParent = document.querySelector(".lightbox")
    lightboxParent.addEventListener("keydown", (e) => {
        const gallery = document.querySelectorAll(".photo")
        const lightboxgallery = document.querySelectorAll(".lightbox_affiche")
        const arryLightboxgallery = Array.from(lightboxgallery)
        const AfficheIndex = arryLightboxgallery    // trouve index de photo affiché
            .findIndex(e => e.classList.length == 2);

        if (e.key == "Escape") {  // appuye "Escape" pour fermer lightbox photo
            lightboxBtns.classList.remove("active")
            lightboxgallery[AfficheIndex].classList.remove("active")
            removeActive();
            gallery[AfficheIndex].focus(); //quand lightbox est fermé, focus un photo de l'abulm

        } else if (e.key == "ArrowRight") {
            var plus = AfficheIndex + 1;
            if (plus < lightboxgallery.length) { 
                lightboxgallery[AfficheIndex].classList.remove("active");
                lightboxgallery[plus].classList.add("active");
                lightboxgallery[plus].firstElementChild.firstElementChild.focus(); //focus le photo qui est affiché

            } else return;
        } else if (e.key == "ArrowLeft") {
            var prev = AfficheIndex - 1;
            if (AfficheIndex > 0) {  // fist photo to last photo
                lightboxgallery[AfficheIndex].classList.remove("active");
                lightboxgallery[prev].classList.add("active");
                lightboxgallery[prev].firstElementChild.firstElementChild.focus();
            } else return;
        }
    })

    lightboxBtns.addEventListener("keydown", closeBykey);

    function closeBykey(e) {
        const gallery = document.querySelectorAll(".photo")
        if (e.key == "Enter") {
            const AfficheIndex = arryLightboxgallery
                .findIndex(e => e.classList.length == 2);
            lightboxBtns.classList.remove("active");
            console.log("AfficheIndex", AfficheIndex)
            removeActive();
            gallery[AfficheIndex].focus();
                         }}

}

function focusInsidePage() {

    const focusableElements =
        'header a, button,[tabindex="0"]';

    const focusableContent = document.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[1]; // recupere link index
    const lastFocusableElement = focusableContent[38]; // recupere dernier element dans la page
    console.log(firstFocusableElement,lastFocusableElement );
    document.addEventListener('keydown', function (e) {
        let isTabPressed = e.key === 'Tab';
        if (!isTabPressed) {
            return;
        } else { // si "tab" key est appuyé
            if (document.activeElement === lastFocusableElement) { // focused element est dernier element
                firstFocusableElement.focus(); // logo link focus
                e.preventDefault();
                }}
    })
}



 function Tester() {

    document.addEventListener("keydown", (e) => {
        console.log(e.key, document.activeElement)
    })
}
 