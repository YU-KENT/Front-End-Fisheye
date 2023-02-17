function focusInsidePage() {

    const focusableElements =
        'section a,[tabindex="0"]';

    const firstFocusableElement = document.querySelectorAll(focusableElements)[0]; // recupere premier element dans la page
    const focusableContent = document.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // recupere dernier element dans la page

    document.addEventListener('keydown', function (e) {
        let isTabPressed = e.key === 'Tab';
        if (!isTabPressed) {
            return;
        } else { // si "tab" key est appuyé
            if (document.activeElement === lastFocusableElement) { // focused element est dernier element
                firstFocusableElement.focus(); // premier element est focused
                e.preventDefault();
                }}
    })
}

let active = -1;
function keyarrowLeftRight() {  //fonction, appuye"right" et "left" pour naviguer les photographers
    document.addEventListener("keydown", (e) => {
        const sectionArtciles = document.querySelectorAll(".photographer_section article a")
        const articleLength = sectionArtciles.length
        if (e.key == "ArrowRight") {
            if (active < articleLength - 1)
                active += 1;
            sectionArtciles[active].focus();
        

        }else if (e.key == "ArrowLeft") {
            if (active > 0) {
                active -= 1;
                sectionArtciles[active].focus();
                
            }
        }
    })
}
