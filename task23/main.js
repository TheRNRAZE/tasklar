const liElem2 = document.querySelector("ul li:nth-child(2)");
liElem2.innerText = "Iki";
console.log(liElem2);


const ulElem = document.querySelector("ul")
let newLi = document.createElement("Li");
newLi.innerText = "5";
ulElem.append(newLi);


ulElem.insertBefore(newLi, ulElem.children[1]);


