    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        
        photographers.forEach((photographer) => {
            const userCardDOM = photographerFactory(photographer).getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }
   

    async function displayPhotographers() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographersData();
        
        displayData(photographers);
        keyarrowLeftRight();

    };
    
    displayPhotographers();
   
    