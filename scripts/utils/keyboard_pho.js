// appuye "Escape" pour fermer le modal contact form
function modalkeyEscape() {  
    const modal = document.getElementById("contact_modal");
    const btnContact = document.querySelector(".contact_button")
    modal.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            closeModal();
            btnContact.focus();
        }
    })
}

/// fonction keyboard pour l'abulm photo 
let active = -1;
function keyArrowGallery() {  
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
            }
        }
    })

}

///fonction keyboard pour lightbox
function keyArrowLightbox() { 
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

    lightboxBtns.addEventListener("keydown", closeBykey); // quand button close est focused,
    function closeBykey(e) { // tab "Enter" pour fermer lightbox
        const gallery = document.querySelectorAll(".photo")
        if (e.key == "Enter") {
            const AfficheIndex = arryLightboxgallery
                .findIndex(e => e.classList.length == 2);
            lightboxBtns.classList.remove("active");
            console.log("AfficheIndex", AfficheIndex)
            removeActive();
            gallery[AfficheIndex].focus(); // quand lightbox est fermé, le photo été ouvert focus
        }
    }

}


function focusInsidePage() {
    const header = document.querySelector("header")

    document.addEventListener('keydown', function (e) {
        const numLikes = document.querySelectorAll("button .like");
        const likesLength = numLikes.length;
        const lastNumLike = document.activeElement.firstElementChild //dernier element dans la page
        let isTabPressed = e.key === 'Tab';

        if (!isTabPressed) {
            return;
        } else { // si "tab" key est appuyé
            if (document.activeElement.className == "photo_like") { // focused element est dernier element
                if (lastNumLike.innerHTML == numLikes[likesLength - 1].innerHTML) { // si focused element est dernier element
                    header.focus();
                }
            }
        }
    })
}


