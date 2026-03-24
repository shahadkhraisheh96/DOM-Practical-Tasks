const div=document.createElement("div");
div.style.alignContent="center";
div.style.border="1px solid red";
div.style.padding="30px";

const title=document.createElement("h1");
title.textContent="Roses";
title.style.textAlign="center";

const description=document.createElement('p');
description.innerText="A rose is either a woody perennial flowering plant of the genus Rosa (/ˈroʊzə/),[4] in the family Rosaceae (/roʊˈzeɪsiːˌiː/),[4] or the flower it bears. There are over three hundred species and tens of thousands of cultivars.[5] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.[6] Their flowers vary in size and shape and are usually large and showy, in colours ranging from white through pinks, reds, oranges and yellows. Most species are native to Asia, with smaller numbers native to Europe, North America, and Northwest Africa.[6] Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses to climbers that can reach seven meters in height.[6] Different species hybridize easily, and this has been used in the development of the wide range of garden roses.";

const image=document.createElement('img');
image.setAttribute("src","/Task2/roses.jpg");
image.setAttribute("alt","Roses");
image.style.textAlign="center";


div.append(title);
div.append(description);
div.append(image);
document.body.append(div);