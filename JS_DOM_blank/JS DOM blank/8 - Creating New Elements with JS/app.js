const input = document.getElementById("input");
const submit = document.querySelector("#submit");
const list = document.getElementsByTagName("ul")[0];
const showhide = document.getElementById("showhide-btn");

submit.addEventListener("click", () => {
    if (input.value != "") {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    listItem.style.color = "orange";
    list.appendChild(listItem);

    }
});

showhide.addEventListener("click", () => {
    if(image.style.display == "none") {
       image.style.display = "block";
       button.textContent = "hide";
    } else {
       image.style.display = "none";
       button.textContent = "show";

    }
})

document.addEventListener("keypress",(e) =>{
    if (keycode ==13) {
        if (input.value != "") {
            let listItem = document.createElement("li");
    listItem.textContent = input.value;
    listItem.style.color = "orange";
    list.appendChild(listItem);
    input.value = "";

        }
    }

})