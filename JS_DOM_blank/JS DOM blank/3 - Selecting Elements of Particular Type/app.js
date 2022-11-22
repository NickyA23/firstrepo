 const list = document.getElementsByTagName("li");

// list.length;
// list[0];
// list[3];
// list[0].style.color="red";

// console.log(list);
// console.log(list.length);

for (let i = 0; i < list.length; i++ ) {
    if(list[i].className != "not-orange"){
        list[i].style.color = "orange";
    }
}

