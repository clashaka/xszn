export default function tab() {

    async function fetchLink() {
        const response = await fetch('./data/link.json');
        const link = await response.json();


        const tabs = document.querySelectorAll('.tabs');
        const tabContent = document.querySelector('.tab-content');
        const linkArr = [];
        let recommend = [];

        // 遍历 link 中的网址，将网址项保存到新数组，作为推荐项的内容展示
        // 推荐项的内容展示
        for (const key in link) {
            const values = link[key];
            for (const value of values) {
                recommend.push(value);
            }
        }

        // 其余项的内容展示
        for (const key in link) {
            linkArr.push(key);
        }

        while (recommend.length > 0) {
            const random = Math.floor(Math.random() * recommend.length);

            const a = document.createElement('a');
            a.href = recommend[random].url;
            a.target = '_blank';
            a.innerHTML = `
                    <div class="card">
                        <figure class="card-head">
                            <div class="card-icon">
                                <img src="${recommend[random].icon}" alt="${recommend[random].title}" width="43" height="43">
                            </div>
                            <figcaption>
                                <h3>${recommend[random].title}</h3>
                                <p><small>${recommend[random].key}</small></p>
                            </figcaption>
                        </figure>
                        <div class="card-body">
                            <p><small>${recommend[random].desc}</small></p>
                        </div>
                    </div>
                    `;
            tabContent.appendChild(a);
            recommend.splice(random, 1)
        }

        tabs.forEach((item, index) => {

            // 根据 Nav 除推荐项外生成 Tabs Content Dom
            if (index > 0) {
                const tabContent = document.createElement('div');

                tabContent.classList.add('tab-content');
                item.appendChild(tabContent);
            }

            const value = linkArr[index - 1];
            const values = link[value];

            // is.Array 判断一个值是否是数组，返回布尔值
            if (values && Array.isArray(values)) {
                const tabContent = document.querySelectorAll('.tab-content');

                values.forEach((item) => {
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
                                    <p><small>${item.key}</small><p>
                                </figcaption>
                            </figure>
                            <div class="card-body">
                                <p><small>${item.desc}</small><p>
                            </div>
                        </div>
                `;
                    tabContent[index].appendChild(a);
                });
            }
        })

        // Tabs 各容器同高
        const tabOne = document.querySelector('.tabs:nth-child(1)');

        tabs.forEach(item => {
            item.style.height = `${tabOne.clientHeight}px`;
        })
    }

    fetchLink();
}