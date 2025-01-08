const cardBtn = document.getElementById("card-btn")
const hoverBtn = document.getElementById("hover-btn")

const harry = document.getElementById("harry")
const hiddenItem = document.querySelector(".hover-item")
const cardMask = document.getElementById("card-mask")


const allStudentsUrl = "https://hp-api.onrender.com/api/characters/students"


cardBtn.addEventListener("click", () => {
    setTimeout(() => {
        harry.style.display = "none"
        cardMask.style.display = "none"
        hiddenItem.style.display = "block"
    }, 600)
})
hoverBtn.addEventListener("click", () => {  
    setTimeout(() => {
        harry.style.display = "block"
        cardMask.style.display = "block"
        hiddenItem.style.display = "none"
    }, 600)  
})

const getAllStudents = async () => {
    const res = await fetch(allStudentsUrl)
    const data = await res.json()
    console.log(data);

}
getAllStudents()