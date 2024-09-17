import { search, tabs } from "./header.js";
import nav from "./nav.js";
import footer from "./footer.js";
import card from "./card.js";

search();
nav();
tabs();
card();
footer();

// nav 各容器同高
const tabss = document.querySelector('.tabs');
const tabslist = document.querySelectorAll('.tabs');
console.dir(tabss.clientHeight);

tabslist.forEach(item=>{
    item.style.height = `${tabss.clientHeight}px`;
})
