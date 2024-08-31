export default () => {
    const h2 = document.querySelectorAll('nav h2');
    const container = document.querySelector('main .container');
    const navContainer = document.querySelector('nav .container');

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', () => {
        navContainer.scrollLeft -= 50;
        console.log(navContainer.scrollLeft);

    })
    next.addEventListener('click', () => {
        navContainer.scrollLeft += 50;
        console.log(navContainer.scrollLeft);

    })

    h2.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add("panel");
        container.appendChild(div);
        const panel = document.querySelectorAll('main .panel');
        item.addEventListener('click', () => {
            h2.forEach(item => {
                item.classList.remove("active");
            })
            item.classList.add("active");

            panel.forEach(item => {
                item.classList.remove("active");
            })
            panel[index].classList.add("active");
        })
    })
}