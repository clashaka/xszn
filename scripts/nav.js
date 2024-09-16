import link from "./link.js";

export default () => {

    // 遍历导航

    const ul = document.querySelector('nav ul');

    for (const key in link) {
        const li = document.createElement('li');
        li.textContent = key;
        ul.appendChild(li);
    }

    const li = document.querySelectorAll('nav li');
    const container = document.querySelector('main .container')

    // 选项卡列表高亮、追加选项卡面板

    li.forEach((item, index) => {

        item.addEventListener('click', () => {
            li.forEach(e => e.style.color = 'gray');
            item.style.color = 'black';
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
            tabs.forEach(e => e.style.display = 'none');
            tabs[index].style.display = 'block';
        })

    })
}