// creat and append a child

//where to add
const div = document.getElementById("container");
//what to be addad
const newH2 = document.createElement("h2");
newH2.innerText= "Nothing is arraived yet";
//add the child
div.appendChild(newH2);


//added a new full section
//where to add
const mainContainer = document.getElementById("main-container");
// what to be added
const newSection = document.createElement("div");
//added new h1
const newH1 = document.createElement("h1");
newH1.innerText = "Books I need to order";
newSection.appendChild(newH1);
//new p
const newP = document.createElement("p");
newP.innerText= "I didn't buy any books couse I am broke now";
newSection.appendChild(newP);
//added new ul
const newUl = document.createElement("ul");

const newLi1 = document.createElement("li");
newLi1.innerText = "Accounting"
newUl.appendChild(newLi1);

const newLi2 = document.createElement("li");
newLi2.innerText = "Finance"
newUl.appendChild(newLi2);

const newLi3 = document.createElement("li");
newLi3.innerText = "Manegmant";
newUl.appendChild(newLi3);

const newLi4 = document.createElement("li");
newLi4.innerText = "ICT";
newUl.appendChild(newLi4);

newSection.appendChild(newUl)

mainContainer.appendChild(newSection);

// set inner HTML dirrectly

const newSection2 = document.createElement("div");
newSection2.innerHTML = `
<h1>Things I need to buy </h1>
<p>I have so many things to buy for that I need to earn mony </p>
<ul>
    <li>Laptop</li>
    <li>Mobaile</li>
    <li>TWS</li>
    <li>Table</li>
    <li>Book self</li>
</ul>
`;
mainContainer.appendChild(newSection2);