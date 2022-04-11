// -------------------- Déclaration du tableau avec les données -----------------------
const response = [
    {
        nomMenu : "nom menu 1",
        description : "description 1 - ce plat est bon",
        prix : 15000
    },
    {
        nomMenu : "nom menu 2",
        description : "description 2 - ce plat est bon",
        prix : 16000
    },
    {
        nomMenu : "nom menu 3",
        description : "description 3 - ce plat est bon",
        prix : 17500
    },
    {
        nomMenu : "nom menu 4",
        description : "description 4 - ce plat est bon",
        prix : 15000
    },
    {
        nomMenu : "nom menu 5",
        description : " description 5 - ce plat est bon",
        prix : 20000
    },
    {
        nomMenu : "nom menu 6",
        description : " description 6 - ce plat est bon",
        prix : 20500
    },
];

// --------------------------------- Mettre les données précédentes dans index?html -----------------------------------------
// --------------------------------- MENU  ---------------------------------------------------------------

//déclaration des variables
let nomMenu = [];
let description = [];
let prix = [];
//Variable qui va contenir le template
let structureMenu = "";

let i = [];

//fonction qui va afficher automatiquement les menus dans la page web
function affichageMenus (response) {
    //Sélection élément du DOM
    const positionElement = document.querySelector(".container-menu");
    
    //La boucle pour afficher tous les menus dans la page web
    for(i=0; i < response.length; i++)
    {
        //Mettre les données dans les variables
        response.forEach((element, i ) => {
        nomMenu[i] = element.nomMenu;
        description[i] = element.description;
        prix[i] = element.prix;
        });
        //Afficher tous les objets sur la page web
        structureMenu = structureMenu +
         `
        <div class="mise-en-place-menu">
            <div class="photo-menu">
                <img src="test">
            </div>
            <div class: "menu">
                <ul>
                    <li>Nom Menu: <span>${nomMenu[i]}</span> </li>
                    <li>Description: <span>${description[i]}</span> </li>
                    <li>prix: <span></span>${prix[i]}</li>
                </ul>
                <button>Commander ce menu</button>
            </div>
        </div>
        `;
        //Injection html
        positionElement.innerHTML = structureMenu;
    }
}

window.onload = () => {
    affichageMenus(response);
};


