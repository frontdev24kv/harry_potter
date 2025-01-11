const allHouses = document.querySelectorAll(".house")
const container = document.querySelector(".container")
let index;
let houseName = ""
let people = []
let start = 0;
let end = 8;
allHouses.forEach((house, index )=> {
    
    house.addEventListener("click", () => {
        allHouses.forEach(h => h.classList.remove("checked-house"));
        house.classList.add("checked-house")
        console.log(index);
        houseName = house.textContent.trim().toLowerCase();
        container.innerHTML = ""
        getData()
        
   })
})

const url = "https://hp-api.onrender.com/api/characters/house/"

const getData = async() => {
    const response = await fetch(url + (houseName || "gryffindor"))
    people = await response.json()
    render(people, start, end)

}

const render = houses => {
    houses.slice(start, end).forEach(h => {
        const {name, house, alternate_names, image, dateOfBirth} = h
        container.innerHTML +=  `<div class="card-item" style="background-image: url(${image ? image : "https://ik.imagekit.io/hpapi/norris.JPG"})">
        <div class="card-mask">
            <div class="card-info">
                <h2 class="card-name">${name}</h2>
                <p class="card-text card-common-styles">${Boolean(alternate_names.length) ? alternate_names[0]: "The Boy Who Lived"}</p>
                <p class="card-house card-common-styles">${house}</p>
                <p class="card-birthday card-common-styles">${dateOfBirth ? dateOfBirth : "unknown"}</p>
                <button class="card-btn arrow">Більше інформації</button>
            </div>
        </div>
    </div>`
    })
}
getData()