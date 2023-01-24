
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}"`;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const userCard = `
        <a href="${link}"
        <div class="photographer-img"><img src="${picture}" alt="${name}"></div>
        <div class="photographer-info">
        <h2>${name}</h2>
        <p>${city}, ${country}</p>
        <span>${tagline}</span>
        <span class="fs-9">${price}€/jour</span>
        </div>
        </a>`
        article.innerHTML = userCard
        return (article);
    }
    

    return { name, portrait, city, country, tagline, price, id, getUserCardDOM }
}

function mediaFactory(photographer,media){
    const{name, id, price} = photographer;
    const { photographerId, title, image, video, likes } = media;
    const pathsImg =`assets/images/${name}/${image}`;
    const pathsVideo = `assets/images/${name}/${video}`;


   function getPhotosCard(){
    const article = document.createElement( 'article' );
    const photosCard = `
    <div class="photo"><img src="${pathsImg}" data-id="99"></div>
    <div class="photo_context">
    <div class="photo_title">
    <span>${title}</span>
    </div>
    <div class="photo_like">
    <span class="like">${likes}</span>
    <img src="assets/icons/heart-icon.svg">
    </div></div>
    `
    const videoCard = `
    <div class="photo"><video controls> <source src="${pathsVideo}" data-id="99"></video>
    </div>
    <div class="photo_context">
    <div class="photo_title">
    <span>${title}</span>
    </div>
    <div class="photo_like">
    <span class="like">${likes}</span>
    <img src="assets/icons/heart-icon.svg">
    </div></div>
    `
    if(!media.video){
        article.innerHTML = photosCard;
        }

    else {
        article.innerHTML = videoCard;
        }
    return (article);
        }

    return{name, id, price, photographerId, title, likes,getPhotosCard }
}


function lightboxFactory(photographer,media){
    const newdiv = document.createElement("div")
    newdiv.classList.add("lightbox_affiche")
    const {name} = photographer;
    const {image, video, title} = media;
    const pathsImg =`assets/images/${name}/${image}`;
    const pathsVideo = `assets/images/${name}/${video}`;
    
    function getLightboxCard(){
    const photosCard = `
    <div class="lightbox_img">
    <img src="${pathsImg}">
    </div>
    <span class="photo_title">${title}</span>
    `
    const videoCard = `
    <div class="lightbox_video">
    <video controls> <source src="${pathsVideo}"></video>
    </div>
    <span class="photo_title">${title}</span>
    `
    if(!media.video){
        newdiv.innerHTML = photosCard;
        }

    else {
        newdiv.innerHTML = videoCard;
        }
    return (newdiv)}

    return{name,image,video,title,getLightboxCard}
   }


function encartFactory(photographer,filteredMedia){
    
    const{price} = photographer
    const{likes} = filteredMedia
    const tarif = document.getElementById("encart_price")
    tarif.innerHTML = photographer.price + "€/jour"

    function addsumLikes(filteredMedia){  //calule total likes
        const divLike = document.getElementById("totallikes")
        const arrayLikes = filteredMedia.map((ele) => {return ele.likes});
        console.log(arrayLikes);
        let sum = 0;
        for (i = 0; i < arrayLikes.length; i++ ){
        sum += arrayLikes[i];
        }
        console.log(sum)
        divLike.innerHTML = sum;
        } 
        return{price,likes,addsumLikes}
   }