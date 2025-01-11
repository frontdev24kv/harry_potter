const allEmployeesUrl = "https://hp-api.onrender.com/api/characters/staff"
const containar = document.querySelector(".container")
let staff = [];
let start = 0;
let end = 8

const getStaff = async () => {
    const res = await fetch(allEmployeesUrl)
    staff = await res.json()
    renderCard(staff,start,end)    
}
getStaff()

const renderCard = (staff, start, end) => {
    staff.slice(start,end).forEach(person => {
        const {image, name, alternate_names, dateOfBirth,house} = person
        const nickname = alternate_names.reduce((acc,name)=> acc+name+ ", ", "")
        containar.innerHTML += `<div class="card-item" style="background-image: url(${image})">
            <div class="card-mask">
                <div class="card-info">
                    <h2 class="card-name">${name}</h2>
                    <p class="card-text card-common-styles">${Boolean(alternate_names.length)? alternate_names[0]: "The Boy Who Lived"}</p>
                    <p class="card-house card-common-styles">${house || "unknown"}</p>
                    <p class="card-birthday card-common-styles">${dateOfBirth || "unknown"}</p>
                    <button class="card-btn arrow">Більше інформації</button>
                </div>
            </div>
        </div>`
    })
}
