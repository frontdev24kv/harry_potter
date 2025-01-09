const allHouses = document.querySelectorAll(".house")
let index;
allHouses.forEach((house, index )=> {
    
    house.addEventListener("click", () => {
        allHouses.forEach(h => h.classList.remove("checked-house"));
        house.classList.add("checked-house")
        console.log(index);
        
   })
})
