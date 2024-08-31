import tab from "./tab.js";

export default () => {


    const keys = Object.keys(tab);
    const ul = document.querySelector('nav ul')

    ul.textContent = ''
    const li = document.createElement('li')
    li.textContent = keys[0]
    li.classList.add('active')
    ul.appendChild(li)

    function tabs(keys) {
        for (const key in keys) {
            const li = document.createElement('li')
            li.textContent = key
            ul.appendChild(li)
        }
    }

    tabs(tab["全部"])

    const lis = document.querySelectorAll('nav li')

    lis.forEach(item => {
        item.addEventListener('click', () => {
            lis.forEach(item => item.classList.remove('active'))
            item.classList.add('active')
        })
    })
}