const div=document.getElementById("flower-container")
const oldTitle=document.getElementById("title");
const oldDescreption=document.getElementById("descreption");

const newTitle=document.createElement('h1');

newTitle.textContent="lilies";
oldDescreption.innerHTML="Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large and often prominent flowers. Lilies are a group of flowering plants which are important in culture and literature in much of the world.";

div.classList.add("liliesDiv");
div.classList.remove("roseDiv");

oldTitle.replaceWith(newTitle);
