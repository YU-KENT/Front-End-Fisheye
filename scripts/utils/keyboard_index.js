function focusInsidePage() {

    const focusableElements =
        'section a,[tabindex="0"]';

    const firstFocusableElement = document.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    const focusableContent = document.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    document.addEventListener('keydown', function (e) {
        let isTabPressed = e.key === 'Tab';

        if (!isTabPressed) {
            return;
        }

        else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    });

}

/* function Tester() {

    document.addEventListener("keydown", (e) => {
        console.log("这里", document.activeElement)
    })
}
 */











let active = -1;
function keyarrowLeftRight() {  ////ok

    document.addEventListener("keydown", (e) => {
        const sectionArtciles = document.querySelectorAll(".photographer_section article a")
        const articleLength = sectionArtciles.length

        if (e.key == "ArrowRight") {// right
            if (active < articleLength - 1)
                active += 1;
            sectionArtciles[active].focus();
            console.log("right", active)

        }
        else if (e.key == "ArrowLeft") {//left
            if (active > 0) {
                active -= 1;
                sectionArtciles[active].focus();
                console.log("left", active)
            }
        }

    })
}