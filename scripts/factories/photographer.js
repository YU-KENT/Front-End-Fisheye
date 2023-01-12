
function photographerFactory(data) {
    const { name, portrait, city, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}"`;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
       /*  const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = city;
        const description = document.createElement('span');
        description.textContent = tagline;
        const prix = document.createElement('span');
        prix.classList.add("fs-9");
        prix.textContent = price +"€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(prix);
        */

        const userCard = `
        <a href="${link}"
        <div class="photographer-img"><img src="${picture}" alt="${name}"></div>
        <div class="photographer-info">
        <h2>${name}</h2>
        <p>${city}</p>
        <span>${tagline}</span>
        <span class="fs-9">${price}€/jour</span>
        </div>
        </a>`
        article.innerHTML = userCard
        return (article);
    }
    return { name, portrait, city, tagline, price, id, getUserCardDOM }
}

function mediaFactory(photographer,media){
    const{name, id, price} = photographer;
    const { photographerId, title, image, likes } = media;
    const totallikes = 0;

   /*  const totallikes = function sumLikes(data){

    } */
    const photos =`assets/images/${name}/${image}`;

   function getPhotosCard(){
    const article = document.createElement( 'article' );
    const photosCard = `
    <div class="photo"><img src="${photos}"></div>
    <div class="photo_info">
    <span class="title">${title}</span>
    <span class="like">${likes}</span>
    </div>
    `
    article.innerHTML = photosCard
    return (article);
   }
    return{name, id, price, photographerId, title, image, likes,getPhotosCard }
}
