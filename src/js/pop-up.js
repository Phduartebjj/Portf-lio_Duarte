let popUpBg = document.getElementById("pop-up-bg") 
let buttonsAddProduct = document.querySelectorAll(".btn-add")
//Open pop-up

buttonsAddProduct.forEach((button) => {
    button.addEventListener("click", click => {
        popUpBg.classList.add("open")
    })
    
});

//Close pop

popUpBg.addEventListener("click", click => {
    popUpBg.classList.remove("open")
})