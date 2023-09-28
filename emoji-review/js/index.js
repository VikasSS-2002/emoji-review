const boxes = document.querySelectorAll(".box");
const emotes = document.querySelectorAll(".box span"); 

boxes.forEach((box, index) => {
    let count = 0;
    box.addEventListener("click", () => {
        count++; 
        emotes[index].textContent = count; 
    });
});