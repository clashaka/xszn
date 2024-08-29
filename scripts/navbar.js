export default () => {
    const li = document.querySelectorAll('nav ul li h2');

    li.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item);

            li.forEach((item) => {
                item.classList.remove('active');
            })
            item.classList.add('active');
        })
    })
}