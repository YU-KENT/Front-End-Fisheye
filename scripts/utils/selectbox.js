const sel = document.querySelector('.select');
const label = document.querySelector('.pre-option');
const options = document.querySelector('.options');

options.setAttribute('hidden', true);
// ouvrir dropdown menu
sel.addEventListener('click', (e) => {
    e.stopPropagation();
    options.removeAttribute('hidden');
    label.setAttribute('hidden', true)
})
// click dehors, fermer dropdown menu
document.body.addEventListener('click', () => {
    options.setAttribute('hidden', true);
    label.removeAttribute('hidden');
})
//chosir select option
options.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        e.stopPropagation();
        label.textContent = e.target.textContent; //selected option egale premièr label option
        e.target.classList.add('selected');
        Array.from(e.target.parentNode.children).forEach((child) => {
            if (child !== e.target) {
                child.classList.remove('selected');
            }
        });
        options.setAttribute('hidden', true);
        label.removeAttribute('hidden');
    }
})


///selectbox keyboard fonction 
const optionsDiv = document.querySelectorAll('.options div');

document.addEventListener("keydown", () => {
    if (document.activeElement === sel) {  //si element focused est ".select"
        options.removeAttribute('hidden'); //ouvrir dropdown menu
        label.setAttribute('hidden', true)
          
    } else if 
    (document.activeElement === optionsDiv[2]) {  // si le dernier option est focused
        options.setAttribute('hidden', true); //fermer dropdown menu
        label.removeAttribute('hidden');
    }
})
    

 