console.log(document.querySelectorAll(".mySection-1"));
// my section er moddhe jotogulo 'li' ache 
console.log(document.querySelectorAll(".mySection-1 li"));
// my section er moddhe jotogulo 'ul' ache 
console.dir(document.querySelectorAll(".mySection-1 ul"));
// my section er moddhe jotogulo "ul" er vitor jotogula "li ache 
console.dir(document.querySelectorAll(".mySection-1 ul li"));
//-------Query with Loop-------------
const someLi = document.querySelectorAll(".frouts-container li");
console.log(someLi)
for (const fli of someLi){
    console.log(fli);
    console.log(fli.innerText);
}