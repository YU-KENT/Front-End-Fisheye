//vlidation pour les champs de form contact
const prenom = document.getElementById("firstname")
const nom = document.getElementById("lastname")
const email = document.getElementById("email")
const message = document.getElementById("message")
const formulaire = document.getElementById("myform")
const formData = document.querySelectorAll(".formData")

function displayModal() {  //ouvert contact form
  const modal = document.getElementById("contact_modal");
  modal.classList.add('modal-on');
  modal.style.display = "block";
  prenom.focus(); //input prenom focus
  modalkeyEscape(); //fonction keyboard fermer le contact form
}

function closeModal() {  // fonction "click" pour fermer le contact form
  const modal = document.getElementById("contact_modal");
  modal.classList.remove('modal-on');
  modal.style.display = "none";
}


formulaire.addEventListener("submit", validate)
function validate(e) {
  e.preventDefault();
  e.stopPropagation();
  const conditions = //array for all validations
    [validatePrenom(), validateNom(), validateEmail(), validateMessage()];

  if (conditions.some(valid => !valid)) {  // filter all function,if there is 1 or plus invalidate function, return false
    return;
  } else { // else there is 0 invalide function
    const mess = prenom.value +"\n" + nom.value +"\n"+email.value+"\n"+ message.value
    console.log(mess)
    closeModal();
  }
}
//validate prenom

function validatePrenom() {
  if (prenom.value.trim() === "" || prenom.value.length < 2) /* not empty or at least 2 characters */ {
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prenom");
    formData[0].setAttribute("data-error-visible", true);// add message error
    return false;
  } else {
    formData[0].removeAttribute('data-error');   // if it's correct remove message arror
    formData[0].removeAttribute('data-error-visible');
    return true;
  }

}

// validate nom
function validateNom() {
  if (nom.value.trim() === "" || nom.value.length < 2) /* not empty or at least 2 characters */ {
    formData[1].setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
    formData[1].setAttribute('data-error-visible', true);
    return false;

  } else {
    formData[1].removeAttribute('data-error');
    formData[1].removeAttribute('data-error-visible');
    return true;
  }
}


// validate email
function validateEmail() {
  const regexEmail =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/; /*regex mail*/

  if (!regexEmail.test(email.value) || email.value.trim() === "")/* not empty or match regex condition */ {
    formData[2].setAttribute('data-error', 'Veuillez inclure \"@\" dans l\'adress e-mail');
    formData[2].setAttribute('data-error-visible', true);

    return false;
  } else {
    formData[2].removeAttribute('data-error');
    formData[2].removeAttribute('data-error-visible');
    return true;

  }
}

function validateMessage() {
  if (message.value.trim() === "") /* not empty or at least 2 characters */ {
    formData[3].setAttribute('data-error', 'Votre message ne doit pas être vide');
    formData[3].setAttribute('data-error-visible', true);
    return false;

  } else {
    formData[3].removeAttribute('data-error');
    formData[3].removeAttribute('data-error-visible');
    return true;
  }
}

async function getcurrentname() {
  const currentname = document.getElementById("currentname")
  const { photographers } = await getPhotographersData()
  const photographer = getPhotographer(photographers)
  currentname.innerHTML = photographer.name
  return (currentname)
}
getcurrentname()

