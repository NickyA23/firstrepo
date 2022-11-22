const image = document.getElementById("cat");
const button = document.getElementById("submit");

// button.addEventListener("click", () => {
//     image.style.display = "none";
//     })

// $("button").click(function(){
//     $("cat").show();
// })

// jQuery example
// $("button").click(function(){
//     $("image").toggle();
// })


button.addEventListener("click", () => {
    if(image.style.display == "none") {
       image.style.display = "block";
       button.textContent = "hide";
    } else {
       image.style.display = "none";
       button.textContent = "show";

    }
})
