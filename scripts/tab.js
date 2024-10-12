export default async function tab() {

    const response = await fetch('./data/link.json');
    const link = await response.json();
    const tabs = document.querySelectorAll('.tabs');
    // 存放“全部”Tab的数据
    let arr = []

    tabs.forEach((element, index) => {
        if (index < 1) {
            tabActive()
            const tabContent = element.querySelector('.tab-content');
            for (const value of link) {
                for (const key in value) {
                    for (const item of value[key]) {
                        for (const key in item) {
                            for (const value of item[key]) {
                                arr.push(creCard(value));
                                // if (arr.length <= 16) {
                                //     tabContent.appendChild(creCard(value));
                                // }
                            }
                        }
                    }
                }
            }
        }
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
                            tabContent.appendChild(creCard(item));
                        }
                    }
                }
            }
            tabActive();
        }
        //创建卡片函数
        function creCard(value) {
            const a = document.createElement('a');
            a.href = value.url;
            a.target = '_blank';
            a.innerHTML = `
            <div class="card">
                <figure class="card-head">
                    <div class="card-icon">
                        <img src="${value.icon}" alt="${value.title}" width="43">
                    </div>
                    <figcaption>
                        <h3>${value.title}</h3>
                        <small>${value.key}</small>
                    </figcaption>
                </figure>
                <div class="card-body">
                    <small>${value.desc}</small>
                </div>
            </div>
            `;
            return a;
        }
        function tabActive() {
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

    // 随机抽取16个卡片
    const tabContent = document.querySelector('.tab-content');

    for (let i = 0; i < 16; i++) {
        const random = Math.floor(Math.random() * arr.length);
        tabContent.appendChild(arr[random]);
        arr.splice(random, 1);
    }
}