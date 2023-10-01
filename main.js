const wrapper =  document.querySelector(".wrapper")
const selectBtn = wrapper.querySelector(".select-btn")
const options = wrapper.querySelector(".options")
const searchInp = wrapper.querySelector("input")

let countries = [
  "Afghanistan",
  "Albanie",
  "Algérie",
  "Andorre",
  "Angola",
  "Antigua-et-Barbuda",
  "Argentine",
  "Arménie",
  "Australie",
  "Autriche",
  "Azerbaïdjan",
  "Bahamas",
  "Bahreïn",
  "Bangladesh",
  "Barbade",
  "Biélorussie",
  "Belgique",
  "Belize",
  "Bénin",
  "Bhoutan",
  "Bolivie",
  "Bosnie-Herzégovine",
  "Botswana",
  "Brésil",
  "Brunei",
  "Bulgarie",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodge",
  "Cameroun",
  "Canada",
  "République centrafricaine",
  "Tchad",
  "Chili",
  "Chine",
  "Colombie",
  "Comores",
  "Congo",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatie",
  "Cuba",
  "Chypre",
  "République tchèque",
  "Danemark",
  "Djibouti",
  "Dominique",
  "République dominicaine",
  "Équateur",
  "Égypte",
  "Salvador",
  "Guinée équatoriale",
  "Érythrée",
  "Estonie",
  "Éthiopie",
  "Fidji",
  "Finlande",
  "France",
  "Gabon",
  "Gambie",
  "Géorgie",
  "Allemagne",
  "Ghana",
  "Grèce",
  "Grenade",
  "Guatemala",
  "Guinée",
  "Guinée-Bissau",
  "Guyana",
  "Haïti",
  "Honduras",
  "Hongrie",
  "Islande",
  "Inde",
  "Indonésie",
  "Iran",
  "Irak",
  "Irlande",
  "Israël",
  "Italie",
  "Jamaïque",
  "Japon",
  "Jordanie",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Corée du Nord",
  "Corée du Sud",
  "Koweït",
  "Kirghizistan",
  "Laos",
  "Lettonie",
  "Liban",
  "Lesotho",
  "Libéria",
  "Libye",
  "Liechtenstein",
  "Lituanie",
  "Luxembourg",
  "Macédoine du Nord",
  "Madagascar",
  "Malawi",
  "Malaisie",
  "Maldives",
  "Mali",
  "Malte",
  "Îles Marshall",
  "Mauritanie",
  "Maurice",
  "Mexique",
  "Micronésie",
  "Moldavie",
  "Monaco",
  "Mongolie",
  "Monténégro",
  "Maroc",
  "Mozambique",
  "Myanmar",
  "Namibie",
  "Nauru",
  "Népal",
  "Pays-Bas",
  "Nouvelle-Zélande",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norvège",
  "Oman",
  "Pakistan",
  "Palaos",
  "Panama",
  "Papouasie-Nouvelle-Guinée",
  "Paraguay",
  "Pérou",
  "Philippines",
  "Pologne",
  "Portugal",
  "Qatar",
  "Roumanie",
  "Russie",
  "Rwanda",
  "Saint-Kitts-et-Nevis",
  "Sainte-Lucie",
  "Saint-Vincent-et-les-Grenadines",
  "Samoa",
  "Saint-Marin",
  "Sao Tomé-et-Principe",
  "Arabie saoudite",
  "Sénégal",
  "Serbie",
  "Seychelles",
  "Sierra Leone",
  "Singapour",
  "Slovaquie",
  "Slovénie",
  "Îles Salomon",
  "Somalie",
  "Afrique du Sud",
  "Soudan du Sud",
  "Espagne",
  "Sri Lanka",
  "Soudan",
  "Suriname",
  "Suède",
  "Suisse",
  "Syrie",
  "Tadjikistan",
  "Tanzanie",
  "Thaïlande",
  "Timor oriental",
  "Togo",
  "Tonga",
  "Trinité-et-Tobago",
  "Tunisie",
  "Turquie",
  "Turkménistan",
  "Tuvalu",
  "Ouganda",
  "Ukraine",
  "Émirats arabes unis",
  "Royaume-Uni",
  "États-Unis",
  "Uruguay",
  "Ouzbékistan",
  "Vanuatu",
  "Vatican",
  "Venezuela",
  "Vietnam",
  "Yémen",
  "Zambie",
  "Zimbabwe"
]

const addCountry = (selectedCountry) =>{
  options.innerHTML = ""
  countries.forEach((country) => {
    
    // if country selected and country value is the same then add selected class
    let isSelected = country == selectedCountry ? "selected" : ""

    let li = `<li onclick="updateName(this) class="${isSelected}">${country}</li>`
    
    options.insertAdjacentHTML("beforeend", li)
  })
}

addCountry()

const updateName = (selectedLi) =>{
  searchInp.value = ""
  addCountry(selectedLi.innerText)
  console.log('selected li', selectedLi.innerText)
  selectBtn.firstElementChild.innerText = selectedLi.innerText
  wrapper.classList.remove("active")
}

selectBtn.addEventListener("click", ()=>{
  wrapper.classList.toggle("active")
})

searchInp.addEventListener("keyup", ()=>{
  console.log('search input value', searchInp.value)
  let arr = []
  let searchedVal = searchInp.value.toLowerCase()

  // return all countries from array which starts with searched value
  // and mapping returned country with li and join then
  arr = countries.filter((data)=>{
    return data.toLowerCase().startsWith(searchedVal)
  }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("")

  console.log('arr', arr)

  options.innerHTML = arr ? arr : `<li>Oooops, Country Not Found!</li>`
})

