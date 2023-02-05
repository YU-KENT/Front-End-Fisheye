

const sel = document.querySelector('.select');
const label = document.querySelector('.pre-option');
const options = document.querySelector('.options');

options.setAttribute('hidden', true);

sel.addEventListener('click', (e) => {
    e.stopPropagation();
    options.removeAttribute('hidden');
    label.setAttribute('hidden', true)
});


   
document.body.addEventListener('click', (e) => {
    options.setAttribute('hidden', true);
    label.removeAttribute('hidden');
});


options.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        e.stopPropagation();
        label.textContent = e.target.textContent;
        e.target.classList.add('selected');
        Array.from(e.target.parentNode.children).forEach((child) => {
            if (child !== e.target) {
                child.classList.remove('selected');
            }
        });
        options.setAttribute('hidden', true);
        label.removeAttribute('hidden');
    }
});

///selectbox keyboard
document.addEventListener("keydown",()=>{
    const optionsDiv = document.querySelectorAll('.options div');
    const section = document.querySelector("section")
    const sel = document.querySelector('.select');       
      if(document.activeElement === sel){
       options.removeAttribute('hidden');
       label.setAttribute('hidden', true)
    }else if(document.activeElement === optionsDiv[2]){
        
        options.setAttribute('hidden',true);
        label.removeAttribute('hidden')

    }
    
       
           })

