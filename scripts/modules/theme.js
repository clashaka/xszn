function theme() {
    const html = document.querySelector('html');
    const light = document.querySelector('#light');
    const dark = document.querySelector('#dark');

    // 持久化主题
    if (localStorage.getItem('theme') === 'dark') {
        light.style.display = 'none'
        dark.style.display = 'block'
        html.setAttribute('data-theme', 'dark')
    } else if (!localStorage.getItem('theme')) {
        dark.style.display = 'none'
    }

    // 主题切换
    light.addEventListener('click', () => {
        light.style.display = 'none'
        dark.style.display = 'block'
        html.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark');
    })

    dark.addEventListener('click', () => {
        dark.style.display = 'none'
        light.style.display = 'block'
        html.removeAttribute('data-theme')
        localStorage.removeItem('theme');
    })
}

export { theme }