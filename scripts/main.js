import { search } from "./header.js";
import nav from "./nav.js";
import footer from "./footer.js";
import tab from "./tab.js";

search();
nav();
tab();
footer();

// nav 各容器同高
const tabss = document.querySelector('.tabs');
const tabslist = document.querySelectorAll('.tabs');

tabslist.forEach(item => {
    item.style.height = `${tabss.clientHeight}px`;
})

const html = document.querySelector('html');

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.toggle('dark');
}

document.getElementById('theme-toggle').addEventListener('click', function (e) {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', html.classList);
});