let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    item.style.fontSize="20px";
    item.style.fontWeight="bold";
    item.style.color="#8576FF";
    
    
    let button = document.createElement("button");
    button.innerText="Delete";
    button.style.backgroundColor="#FF0000";
    button.style.color="white";
    button.style.borderRadius="5px";
    button.style.marginLeft="5px";
    button.style.marginBottom="5px";


    console.dir(item);
    button.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(button);
    input.value="";
});


ul.addEventListener("click", function(event){
    console.log(event.target);
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


