

let h1 = document.querySelector("h1");
let inp = document.querySelector("input")
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value ="";
});

ul.addEventListener("click", function(event) {
    console.log(event.target);
    if(event.target.nodeName =="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});