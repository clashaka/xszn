import link from "../link.js";

function tabs() {
    const ul = document.querySelector('.tabs ul');

    for (const key in link) {
        const value = link[key]
        for (const key in value) {
            const li = document.createElement('li');
            const h2 = document.createElement('h2');
            h2.textContent = key;
            ul.appendChild(li);
            li.appendChild(h2);
        }
    }
}

export { tabs };