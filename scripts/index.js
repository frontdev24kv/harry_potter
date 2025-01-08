const studentsBtn = document.getElementById("students-btn");
const employeesBtn = document.getElementById("employees-btn");
const housesBtn = document.getElementById("houses-btn");

studentsBtn.addEventListener("click", () => {
    window.location.assign("./site/students.html")
})

employeesBtn.addEventListener("click", () => {
    window.location.assign("./site/employees.html")
})

housesBtn.addEventListener("click", () => {
    window.location.assign("./site/house.html")
})

