import link from "../link.js";

function tabs() {

    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((item, index) => {

        if (index > 0) {
            const tablist = document.createElement('div');
            const ul = document.createElement('ul');

            const tabpanel = document.createElement('div');

            tabpanel.classList.add('tabpanel');

            tablist.classList.add('tablist');
            item.appendChild(tablist);
            item.appendChild(tabpanel)

            tablist.appendChild(ul);

            const test = Object.keys(link);

            const key = test[index - 1];

            const values = link[key];

            const test2 = Object.keys(values);

            for (const key in values) {
                const li = document.createElement('li');
                const h2 = document.createElement('h2');

                h2.textContent = key;
                ul.appendChild(li);
                li.appendChild(h2);
                const tabcontainer = document.createElement('div');
                const tabcontent = document.createElement('div');
                tabcontainer.classList.add('tab-container');
                tabcontent.classList.add('tab-content');
                tabpanel.appendChild(tabcontainer);
                tabcontainer.appendChild(tabcontent);
            }

        }
    })

    const tabContent = document.querySelectorAll('.tabpanel .tab-content');

    let step = 0;

    for (const key in link) {

        const value = link[key];
        for (const key in value) {
            step++;
            const values = value[key];
            for (const item of values) {
                const a = document.createElement('a');
                a.href = item.url;
                a.target = '_blank';
                a.innerHTML = `
                        <div class="card">
                            <figure class="card-head">
                                <div class="card-icon">
                                    <img src="${item.icon}" alt="${item.title}" width="43" height="43">
                                </div>
                                <figcaption>
                                    <p>${item.title}</p>
                                    <small>${item.tag}</small>
                                </figcaption>
                            </figure>
                            <div class="card-body">
                                <small>${item.desc}</small>
                            </div>
                        </div>
                        `;
                tabContent[step].appendChild(a);
            }
        }
    }

    tabs.forEach((item, index) => {
        if (index > 0) {
            const li = item.querySelectorAll('li');
            const tabcontainer = item.querySelectorAll('.tab-container');

            li[0].classList.add('active');

            tabcontainer[0].style.display = 'block';

            li.forEach((item, index) => {

                item.addEventListener('click', () => {
                    li.forEach(e => e.classList.remove('active'));
                    item.classList.add('active');
                    tabcontainer.forEach(e => e.style.display = 'none');
                    tabcontainer[index].style.display = 'block';
                })
            })

        }
    })
}

export { tabs };