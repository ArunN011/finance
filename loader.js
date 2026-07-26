

document.body.classList.add("loading");

window.addEventListener("load", () => {

    setTimeout(() => {

        
        document
            .getElementById("preloader")
            .classList.add("hide");

        document
            .getElementById("website")
            .classList.add("show");

   
        document.body.classList.remove("loading");

    }, 3000);

});