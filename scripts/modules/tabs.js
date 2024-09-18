import link from "../link.js";

function tabs() {
    const tabs = document.querySelectorAll('.tabs');

    const linkArr = [];
    for (const key in link) {
        linkArr.push(key);
    }

    tabs.forEach((item, index) => {

        // 根据 Nav 除推荐生成 Tabs Content Dom
        if (index > 0) {
            const tabpanel = document.createElement('div');
            const tabcontent = document.createElement('div');

            item.appendChild(tabpanel)
            tabpanel.classList.add('tabpanel');
            tabcontent.classList.add('tab-content');
            tabpanel.appendChild(tabcontent);
        }

        // 遍历 link 中的数据到 Tabs Content Dom

        const value = linkArr[index - 1];
        const values = link[value];

        // is.Array 判断一个值是否是数组，返回布尔值
        if (values && Array.isArray(values)) {
            const tabContent = document.querySelectorAll('.tabpanel .tab-content');
            values.forEach((item) => {
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
                tabContent[index].appendChild(a);
            });
        }
    })
}

export { tabs };