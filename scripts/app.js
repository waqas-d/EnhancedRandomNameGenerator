import { RandomGroups } from "./randomFunction.js";

let addNameBtn = document.getElementById("addNameBtn");
let nameInput = document.getElementById("nameInput");

let randomGroupsBtn = document.getElementById("randomGroupsBtn");

let nameTxt = document.getElementById("nameTxt");

let removeBtn = document.getElementById("removeBtn");

let nameArray = [];
if(localStorage.getItem("names")) {
    nameArray = JSON.parse(localStorage.getItem("names"));
}

addNameBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);
    nameTxt.innerText = nameArray.join(', ');

    localStorage.setItem("names", JSON.stringify(nameArray));
});

randomGroupsBtn.addEventListener('click', function (){
    nameTxt.innerText = RandomGroups(nameArray);
});

removeBtn.addEventListener('click', function(){
   let index = nameArray.indexOf(nameInput.value);
   nameArray.splice(index, 1);
   nameInput.value = "";
   console.log(nameArray);

   localStorage.setItem("names", JSON.stringify(nameArray));
});
