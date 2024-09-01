import link from "./link.js";

export default () => {

    const ul = document.querySelector('nav ul');

    for (const key in link) {
        const li = document.createElement('li');
        li.textContent = key;
        ul.appendChild(li);
    }

    const li = document.querySelectorAll('nav li');
    const container = document.querySelector('main .container')



    li.forEach((item, index) => {

        item.addEventListener('click', () => {
            li.forEach(e => e.style.color = 'gray');
            item.style.color = 'black';
        })

        if (index > 0) {
            const div = document.createElement('div');
            div.textContent = index;
            div.classList.add('tabs')
            container.appendChild(div);
        }
    })

    const tabs = document.querySelectorAll('main .tabs')

    li.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabs.forEach(e => e.style.display = 'none');
            tabs[index].style.display = 'block';
            console.log(index);
        })

    })
}