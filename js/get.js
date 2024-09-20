// // set style with js
// console.log(document.getElementById("fruits-title"));
// console.log(document.getElementById("fruits-title").style);
// console.log(document.getElementById("fruits-title").style.color = "red");
// console.log(document.getElementById("sec-1").style.backgroundColor = "pink");

// // get attribute
// const title = document.getElementById("fruits-title");
// console.log(title.getAttribute('class'));
// console.log(title.classList); //get classes like an array

// // to add a class
// title.classList.add("fvrt-fruits")
// console.log(title.classList);
// // to remove a class
// title.classList.remove("title");
// //set a HTML tag // its not working
// console.log(title.classList);
// const set = document.getElementById("sec-1")[0].innerHTML='<h2>Dom is Changing</h2>';
// console.log(set)

//---------------------------------\
// CSS style with javaScript
const sections = document.querySelectorAll("section");
// console.log(sections);
for (let section of sections) {
  console.log(section);
  section.style.border = "2px solid steelblue";
  section.style.margin = "10px";
  section.style.borderRadius = "10px";
  section.style.backgroundColor= "lightGray"
}

// sec-1 ID er moddhe jotogula li ache
console.log(document.querySelectorAll("#sec-1 li"))

//--------------------------
const movieCont = document.getElementById("movie-container");
movieCont.style.color = "blue";

//----------childNodes nodeas -----------------\\
console.log(document.getElementById("sec-1").childNodes)
console.log(document.getElementById("sec-1").childNodes[3])
console.log(document.getElementById("sec-1").firstChild)
console.log(document.getElementById("sec-1").childNodes[5]);
console.log(document.getElementById("sec-1").childNodes[5].childNodes);
console.log(document.getElementById("sec-1").childNodes[5].childNodes[5]);

//---------Siblings
console.log(document.getElementById("sec-1").childNodes[5].childNodes[5].nextSibling);
console.log(document.getElementById("sec-1").childNodes[5].childNodes[5].previousSibling);

// creat Element  and push  with append
// document.createElement(p)
const newLi = document.createElement('li');
newLi.innerText= "New place to go";
console.log(newLi.innerText)
const secUl = document.getElementById('fruit-list')
console.log(secUl.childNodes)
//appendChild
secUl.appendChild(newLi);
console.log(secUl.childNodes);
console.log(secUl.innerText);

const newP = document.createElement("p")
newLi.innerText= "push a new tag with appendChild";
const newSecP = document.getElementById("sec-1");
newSecP.appendChild(newP);

//ParentNode
console.log("here is some Parent tag")
console.log(newLi.parentNode)
console.log(newLi.parentNode.parentNode)
console.log(newLi.parentNode.parentNode.parentNode)
console.log(newLi.parentNode.parentNode.parentNode.parentNode)
console.log(newLi.parentNode.parentNode.parentNode.parentNode.parentNode)
console.log(newLi.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
