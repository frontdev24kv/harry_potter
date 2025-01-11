const mainBtn = document.querySelector(".main-btn")

const studentsBtn = document.getElementById("students-btn");
const employeesBtn = document.getElementById("employees-btn");
const housesBtn = document.getElementById("houses-btn");
const hiddenContent = document.querySelector(".hidden-content")

mainBtn.addEventListener("click", () => {
    hiddenContent.style.display = "block";
    mainBtn.disabled = true
})

studentsBtn.addEventListener("click", () => {
        window.location.assign("./site/students.html")   
})

employeesBtn.addEventListener("click", () => {
    window.location.assign("./site/employees.html")
})

housesBtn.addEventListener("click", () => {
    window.location.assign("./site/house.html")
})

