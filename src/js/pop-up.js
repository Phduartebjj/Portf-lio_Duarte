let popUpBg = document.getElementById("pop-up-bg") 
let buttonsAddProduct = document.querySelectorAll(".btn-add")
//Open pop-up

buttonsAddProduct.forEach((button) => {
    button.addEventListener("click", event => {
        popUpBg.classList.add("open")
    })
    
});

//Close pop-up
// Check if the background was clicked. If so, close pop-up.
popUpBg.addEventListener("click", event => {
    if (event.target === event.currentTarget){
        popUpBg.classList.remove("open")
    }
})