//...createElement
// const main = document.getElementById("main");

//  function createAlertViaDOM(message){
//  const div = document.createElement("div");
//  const textNode = document.createTextNode(message)
//  div.className="alert";
//  div.append(textNode);
//  main.prepend(div);
//  }
// createAlertViaDOM("Hello i was created by create element");
//...innerHTML
// function createAlertViaTemplate(message){
// const template =`
// <div class="alert">${message}
// </div>`;
// main.innerHTML += template;
// }
// createAlertViaTemplate("Hello i was created by innerHTML");

//..normal way
// const foodContainerEl=document.getElementById("food-container");
// for(let i=1;i<=10;i++){
// const li=document.createElement("li")
// li.textContent=`Food items: ${i}`
// li.className="food-item";
// foodContainerEl.append(li);
// }
//..fragment
//const favourite=["chicken biriyani","mutton biriyani","prawn biriyani","fish biryani"];
//const fragment =document.createDocumentFragment();
//for(let i=1;i<=10;i++)
//favourite.forEach((food)=>{
    //const li=document.createElement("li")
    //li.textContent=`Food items: ${food}`
    //fragment.append(li)
//})
    //foodContainerEl.append(fragment);
   
    
    //....Inserting DOM Element using js
    // const foodContainerEl=document.getElementById("food-container");
    // const li=document.createElement("li")
    // li.className="food-item";
    // li.textContent="Maggi";
    // //..new way
    // foodContainerEl.append(li);
    //foodContainerEl.prepend(li);
    //foodContainerEl.before(li);
    //foodContainerEl.after(li);
    //..old way
    // foodContainerEl.parentNode.insertBefore(li,foodContainerEl);==>before()

    // foodContainerEl.parentNode.insertBefore(li,foodContainerEl.nextSibling);==>after()

//...Inserting DOM as string Template
  // const foodContainerEl=document.getElementById("food-container");
//..Insert AdjacentHTML
//foodContainerEl.insertAdjacentHTML("beforeend","<p>hi welcome to my Website page is helpyou to how to creat and inserting dom elements using inneradujcent element </p>");
// foodContainerEl.insertAdjacentHTML('afterend',"Veg finished");
// foodContainerEl.insertAdjacentHTML('beforebegin',"<h3>Veg Items</h3>");
// foodContainerEl.insertAdjacentHTML('beforeend',"Veg finished");
//..InsertAdjucentText
// foodContainerEl.insertAdjacentText('afterbegin',"VegList");
//..InsertAdjucentElement
// const list=document.createElement("li");
// list.textContent="NewList";
// list.className="food-item";
//foodContainerEl.insertAdjacentElement('beforeend',maggi);

//...Replacing DOM Elementusing js
// const foodContainerEl=document.querySelector("food-container");
// const sambarLi=document.querySelector(".food-container :first-child ");
// //console.log(sambarLi);
// const li=document.createElement("li");
// li.textContent="sambar";
// li.className="food-item";
// //sambarLi.replaceWith(li);//new way
// //sambarLi.parentNode.replaceChild(li,sambarLi)
// const maggi=document.createElement("li");
//  maggi.textContent="Maggi Noodles";
// maggi.className="food-item";

// //console.log(maggi)
// const egg=document.createElement("li");
// egg.textContent="Egg Noodles";
//  egg.className="food-item";
//  sambarLi.replaceChildren(maggi,li,egg);//new way

//...cloning DOM Elements usin js
//  const foodContainerEl=document.querySelector("#food-container");
//  const duplicateEl = document.getElementById("duplicate");
//  const resyncBtn=document.getElementById("resyncBtn");

// // resyncBtn.addEventListener("click",()=>{
//    duplicateEl.innerHTML=" ";
//    cloneDataTrue=foodContainerEl.cloneNode(true);
//    duplicateEl.append(cloneDataTrue);
//  });


 //...Removing DOM Elements

//...Looping over DOM Element
const foodContainerEl=document.querySelectorAll(".food-container li");

// const foodItems =[];

// for(const item of foodContainerEl){
// foodItems.push(item.innerText);
// }
// console.log("foodItems",foodItems);

// //..spread operator
// foodContainerEl.forEach((food)=>console.log("Food :" ,food))
// const newFoodValue = [...foodContainerEl].forEach((food)=>console.log("Food :" ,food))

//..Array.from
const newArrayFrom=Array.from(foodContainerEl).forEach((food)=>console.log("Food :" ,food));
console.log(newArrayFrom);
// const favourite=["chicken biriyani","mutton biriyani","prawn biriyani","fish biryani"];
// for(let i=0;i<favourite.length;i++){
//   console.log("My favourite food is :"+ favourite[i]);
// }
// for(const item of favourite){
//   console.log("FavouriteFoods:"+item);
// }















