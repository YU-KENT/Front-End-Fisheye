
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}"`;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const userCard = `
        <a href="${link}" target="blank" role="link" title="visiter la page de photographer${name}"
        <div class="photographer-img"><img src="${picture}" alt="portrait de ${name}"></div>
        <div class="photographer-info" aria-label="information de photographer ${name}">
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
    const { photographerId, title, image, video, likes, date } = media;
    const pathsImg =`assets/images/${name}/${image}`;
    const pathsVideo = `assets/images/${name}/${video}`;
    

   function getPhotosCard(){
    const article = document.createElement( 'article' );
    const photosCard = `
    <div class="photo">
       <img src="${pathsImg}" alt="${title} fait en ${date} ">
    </div>
    <div aria-label="la titre du photo" class="photo_context">
       <div tabindex="0" class="photo_title">
          <span>${title}</span>
       </div>
       <button type="button" title="mettre un like au post ${title}" class="photo_like"
       aria-label="button pour liker" aria-pressed="false" tabindex="0">
          <span class="like">${likes}</span>
          <img src="assets/icons/heart-icon.svg" alt="button pour rajouter like en form coeur"/>
       </buton>
    </div>
    `
    const videoCard = `
    <div class="photo">
       <video controls> <source src="${pathsVideo}" alt="${title} fait en ${date}>
       </video>
    </div>
    <div aria-label="la titre du video" class="photo_context">
      <div class="photo_title">
        <span>${title}</span>
      </div>
      <button type="button" class="photo_like">
         <span class="like">${likes}</span>
         <img src="assets/icons/heart-icon.svg" alt="button pour rajouter like en form coeur"/>
      </buton>
    </div>
    `
    if(!media.video){
        article.innerHTML = photosCard;
        }

    else {
        article.innerHTML = videoCard;
        }
    return (article);
        }

    return{name, id, price, photographerId, title, likes, date, getPhotosCard}
}


function lightboxFactory(photographer,media){
    const newdiv = document.createElement("div")
    newdiv.classList.add("lightbox_affiche")
    const {name} = photographer;
    const {image, video, title, date} = media;
    const pathsImg =`assets/images/${name}/${image}`;
    const pathsVideo = `assets/images/${name}/${video}`;
    
    function getLightboxCard(){
    const photosCard = `
    <div class="lightbox_img">
    <img src="${pathsImg}" alt="${title} fait en ${date}>
    </div>
    <span class="photo_title" aria-label="la titre du photo" tabindex="0" >${title}</span>
    `
    const videoCard = `
    <div class="lightbox_video">
    <video controls> <source src="${pathsVideo}" alt="${title} fait en ${date}></video>
    </div>
    <span class="photo_title" aria-label="la titre du video" tabindex="0">${title}
    </span>
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


function encartFactory(photographer){
    
    const{price} = photographer;
    
    const tarif = document.getElementById("encart_price")
    tarif.innerHTML = price + "€/jour"
    tarif.setAttribute("aria-label","le tarif est ${price} par jour")
    
   
        return{price}
   }

   