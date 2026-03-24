const div=document.createElement('div');

const ul=document.createElement('ul');
ul.innerText="The list";

const l1=document.createElement('li');
l1.innerText="first list";
const l2=document.createElement('li');
l2.innerText="seconde list";
const l3=document.createElement('li');
l3.innerText="Third list";

div.append(ul);
ul.append(l1);
ul.append(l2);
ul.append(l3);
document.body.append(div);

const firstDivChild=div.firstElementChild;

const firstLi=firstDivChild.children[0];
const secondeLi=firstDivChild.children[1];

console.log(firstLi.textContent);
console.log(secondeLi.textContent);
console.log(firstDivChild.children[2].textContent);

