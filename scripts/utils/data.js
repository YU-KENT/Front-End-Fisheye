async function getPhotographersData() {

    const res = await fetch("data/photographers.json");
    const data = await res.json();
    const photographersData = data.photographers;

    return ({photographers: photographersData})
    
    // retourner le tableau photographers seulement une fois récupéré
}
async function getmediaData() {

    const res = await fetch("data/photographers.json");
    const data = await res.json();
    const mediaData = data.media;
    return ({media: mediaData})  //get data photos 
    
}