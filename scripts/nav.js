export default () => {
    async function fetchLink() {
        const response = await fetch('./data/link.json');
        const link = await response.json();

        // 遍历导航
        const ul = document.querySelector('nav ul');

        for (const obj of link) {
            for (const key in obj) {
                const li = document.createElement('li');
                const h2 = document.createElement('h2');
                h2.textContent = key;
                ul.appendChild(li);
                li.appendChild(h2);
            }
        }

        const li = document.querySelectorAll('nav li');
        const container = document.querySelector('main')

        // 选项卡列表高亮、追加选项卡面板
        li.forEach((item, index) => {

            item.addEventListener('click', () => {
                li.forEach(item => {
                    item.style.color = 'var(--neutral-color)';
                    item.style.borderBottom = '5px solid transparent';
                });
                item.style.color = 'var(--text-color)';
                item.style.borderBottom = '5px solid var(--text-color)';
            })

            if (index > 0) {
                const div = document.createElement('div');
                div.classList.add('tabs')
                container.appendChild(div);
            }
        })

        // 选项卡面板显示
        const tabs = document.querySelectorAll('main .tabs')

        li.forEach((item, index) => {
            item.addEventListener('click', () => {
                tabs.forEach(item => item.style.display = 'none');
                tabs[index].style.display = 'block';
            })
        })
    }

    fetchLink();
}