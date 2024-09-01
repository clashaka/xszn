import link from "../link.js";

function tabs() {
    const ul = document.querySelector('.tabs ul');

    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((item, index) => {

        if (index > 0) {
            const tablist = document.createElement('div');
            const ul = document.createElement('ul');
            tablist.classList.add('tablist');
            item.appendChild(tablist);
            tablist.appendChild(ul);

            const test = Object.keys(link);

            const key = test[index - 1];

            const value = link[key];

            console.log(value);

            for (const key in value) {
                const li = document.createElement('li');
                const h2 = document.createElement('h2');
                h2.textContent = key;
                ul.appendChild(li);
                li.appendChild(h2);
            }
        }




        // console.log(key);

    })

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