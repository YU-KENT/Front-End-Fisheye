//Mettre le code JavaScript lié à la page photographer.html

/* class Photographer
    {
        constructor(data){
            this._name = data.name
            this._id = data.id
            this._city = data.city
            this._country = data.country
            this._tagline = data.tagline
            this._price = data.price
            this._portrait = data.portrait

        }
        get name(){
            return this._name
        }
        get id(){
            return this._id
        }
        get city(){
            return this._city
        }
        get country(){
            return this._country
        }
        get tagline(){
            return this._tagline
        }
        get price(){
            return this._price
        }
        get portrait(){
            return "assets/photographers/${portrait}"
        }
    } */


    const id = new URL(location.href).searchParams.get("id"); 

    function getPhotographer(photographersData) {
        console.log('photographersData', photographersData, id);
        const photographer = photographersData.find((ele) =>{return ele.id == id})
        return photographer ;
    }

    function getArryphotos(media){
      const arryPhotos = media.filter((media) => media.photographerId == id);
      console.log(arryPhotos);
      return arryPhotos;
    }


     function displayHeader(photographer){
        const pageHeader = document.querySelector(".photograph-header");
        const photographerMode = photographerFactory(photographer);
        const userCardDOM = photographerMode.getUserCardDOM();
        pageHeader.appendChild(userCardDOM);
        
        document.querySelector(".photograph-header a").removeAttribute("href");
        const price = document.querySelector(".photograph-header .fs-9");
        price.style.display = "none";

    };


async function PageHeader() {
        
        const { photographers } = await getPhotographersData();
        const photographer = getPhotographer(photographers);
        console.log('photographer', photographer);
        displayHeader(photographer);
    }
       PageHeader() ;


async function getmediaData() {

            const res = await fetch("data/photographers.json");
            const data = await res.json();
            const mediaData = data.media;
            /* console.log(data.media); */ //correct
            return ({media: mediaData})  //get data photos 
            
        }

async    function addPhotos(photographer, medias) {
    medias.forEach(media => {
        const card = mediaFactory(photographer, media).getPhotosCard();
        const cardSection = document.querySelector(".photos")
        cardSection.appendChild(card);
    });
        }

async function displayPhotos() {
        
            const {media} = await getmediaData();// Récupère les datas media
            const {photographers} = await getPhotographersData();// Récupère les datas photographers
            const photographer = getPhotographer(photographers);
            const filteredMedia = getArryphotos(media);   // Tableau d'image
            addPhotos(photographer,filteredMedia);
        }
  
     displayPhotos();

 
/* const select = document.querySelector("select");
select.addEventListener("change",flitrePhoto);
function flitrePhoto(media){
const selectedvalue = select.options[this.selectedIndex].value;
media.flitre((media) => {media.})
}

 */