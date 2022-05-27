 let inputFood=document.getElementById("input-food");
 let inputBtn = document.getElementById("input-btn");
 let foodContainer=document.getElementById("food-container");

 inputBtn.addEventListener("click",()=>{
 //foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`; 
 const li = document.createElement("li");
 const divRemoveBtn = document.createElement("div");
 const text = document.createTextNode(inputFood.value);

 li.append(text,divRemoveBtn);
  
//console.log(divRemoveBtn.parentElement);
 divRemoveBtn.parentElement.setAttribute("onclick", "removeItem(event)");
 divRemoveBtn.innerHTML = '<button type="button">x</button></div>';

 li.className="food-item";
 //li.append(text);
 //li.append(divRemoveBtn);
 foodContainer.append(li);
 inputFood.value = "";
 });
//  <li class="food-item">sambar rice<div onclick="removeItem(event)">
//             <button type="button">x</button></div>
//             </li>

 function removeItem(event){
let existingList=event.target.parentNode.parentNode;
existingList.remove();//new way
//existingList.parentNode.removeChild(existingList);//old way
}











