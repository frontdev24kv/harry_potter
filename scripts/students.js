const showMoreBtn = document.querySelector(".show-more-btn")
const container = document.querySelector(".container")

const allStudentsUrl = "https://hp-api.onrender.com/api/characters/students"

let hoverButtons = []
let students = []
let start = 0;
let end = 8;
let cardId;
let buttons = [];
let cards = []



const getAllStudents = async () => {
    try {
        const res = await fetch(allStudentsUrl)
        const data = await res.json()
        students = data

        renderCard(students.slice(start, end))
        // updateCard(students, cardId)
    } catch (er) {
        console.log(`We have some error: ${er}`)
    }
}
getAllStudents()

const renderCard = (heroes, start, end) => {

    let result
    heroes.forEach((hero, index) => {

        const { name, alternate_names, house, dateOfBirth, image, yearOfBirth } = hero

        result = `
            
            <div class="card-item" style="background-image: url(${image})" id="${index}">
            <div class="card-mask" id="card-mask">
            <div class="card-info" id="card-info">
            <h2 class="card-name">${name}</h2>
            <p class="card-usernames common-info">${alternate_names.length > 0 ? alternate_names[0] : "The Boy Who Lived"}</p>
            <p class="card-house common-info">${house}</p>
            <p class="card-birthday common-info">${dateOfBirth ? dateOfBirth : "01-01-" + yearOfBirth}</p>
            <button class="card-btn" id="${index}">Більше інформації</button>
            </div>
            </div>
            </div>
            
            `
        container.innerHTML += result
    })

    // get all buttons, all items
    buttons = document.querySelectorAll(".card-btn")
    cards = document.querySelectorAll(".card-item")
    cards.forEach(card => card.dataset.toggled = false)
    buttons.forEach(button => {
        button.addEventListener("click", function () {

            cards.forEach(card => {
                if (card.id === button.id) {
                    
                    cardId = +button.id
                    card.dataset.toggled = true
                 
                    card.innerHTML = updateCard(heroes, cardId)

                }
            })


        })
    })
}

const updateCard = (data, index) => {

    let hero = data[index]
    let content
    const { name, alternate_names, actor, alive, dateOfBirth, yearOfBirth,
        hogwartsStaff, hogwartsStudent, patronus, hairColour, eyeColour, wizard,
        ancestry, gender, house, species, wand } = hero
    content = `<div class="hover-item">
        <p class="first item">Name: <span>${name}</span></p>
        <p class="alt-name">Alternate names: <span>${alternate_names.length > 0 ? alternate_names[0] : "The Boy Who Lived"}</span></p>
        <p>Species: <span>${species}</span></p>
        <p>Gend: <span>${gender}</span></p>
        <p>House: <span>${house}</span></p>
        <p>Date of birth: <span>${dateOfBirth}</span></p>
        <p>Year of birth: <span>${yearOfBirth}</span></p>
        <p>Wizard: <span>${wizard}</span></p>
        <p>Ancestry: <span>${ancestry}</span></p>
        <p>Eye colour: <span>${eyeColour}</span></p>
        <p>Hair colour: <span>${hairColour}</span></p>
        <p>Wand: <span>${Object.keys(wand).length > 0 ? Object.entries(wand).map(([k, v]) => `${k} : ${v}`).join(", ") : "Not any info"}</span></p>
        <p>Patronus: <span>${patronus}</span></p>
        <p>Hogwarts student: <span>${hogwartsStudent}</span></p>
        <p>Hogwarts staff: <span>${hogwartsStaff}</span></p>
        <p>Actor: <span>${actor}</span></p>
        <p>Alive: <span>${alive}</span></p>
        <button id="${cardId}" class="hover-btn">Go back</button>
    </div> `
    return content
}


showMoreBtn.addEventListener("click", () => {
    start += 8
    end += 8
    getAllStudents()

})
