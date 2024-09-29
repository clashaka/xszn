export default async function tab() {

    const response = await fetch('./data/link.json');
    const link = await response.json();
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((element, index) => {

        // 创建 tabpanel
        if (index > 0) {
            const ul = document.createElement('ul');
            element.appendChild(ul);
            for (const key in link[index - 1]) {
                for (const value of link[index - 1][key]) {
                    for (const key in value) {
                        const li = document.createElement('li');
                        const tabPanel = document.createElement('div');
                        const tabContent = document.createElement('div');
                        tabPanel.classList.add('tabpanel');
                        tabContent.classList.add('tab-content');
                        li.textContent = key;
                        ul.appendChild(li);
                        element.appendChild(tabPanel);
                        tabPanel.appendChild(tabContent);
                        for (const item of value[key]) {
                            const a = document.createElement('a');
                            a.href = item.url;
                            a.target = '_blank';
                            a.innerHTML = `
                            <div class="card">
                                <figure class="card-head">
                                    <div class="card-icon">
                                        <img src="${item.icon}" alt="${item.title}" width="43">
                                    </div>
                                    <figcaption>
                                        <h3>${item.title}</h3>
                                        <small>${item.key}</small>
                                    </figcaption>
                                </figure>
                                <div class="card-body">
                                    <small>${item.desc}</small>
                                </div>
                            </div>
                            `;
                            tabContent.appendChild(a);
                        }
                    }
                }
            }
            const lis = element.querySelectorAll('li');
            const tabpanels = element.querySelectorAll('.tabpanel');

            lis[0].classList.add('active');
            tabpanels[0].style.display = 'block';

            lis.forEach((element, index) => {
                element.addEventListener('click', () => {
                    lis.forEach(element => {
                        element.classList.remove('active');
                    })
                    element.classList.add('active');

                    tabpanels.forEach(element => {
                        element.style.display = 'none';
                    })
                    tabpanels[index].style.display = 'block';
                })
            })
        }
    })
}