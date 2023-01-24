async function getPhotographersData() {

    const res = await fetch("data/photographers.json");
    const data = await res.json();
    const photographersData = data.photographers;

    return ({photographers: photographersData})
    
    // et bien retourner le tableau photographers seulement une fois récupéré
   /*  return ({
        photographers: [...photographers,...photographers, ...photographers]}) */
}
async function getmediaData() {

    const res = await fetch("data/photographers.json");
    const data = await res.json();
    const mediaData = data.media;
    /* console.log(data.media); */ //correct
    return ({media: mediaData})  //get data photos 
    
}