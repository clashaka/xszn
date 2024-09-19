function theme() {
    const html = document.querySelector('html');
    const light = document.querySelector('#light');
    const dark = document.querySelector('#dark');

    // 持久化主题切换
    if (localStorage.getItem('theme') === 'dark') {
        light.style.display = 'none'
        dark.style.display = 'block'
        html.setAttribute('data-theme', 'dark')
    }

    // 主题切换
    light.addEventListener('click', () => {
        html.setAttribute('data-theme', 'dark')
        light.style.display = 'none'
        dark.style.display = 'block'
        localStorage.setItem('theme', 'dark');
    })

    dark.addEventListener('click', () => {
        html.removeAttribute('data-theme')
        dark.style.display = 'none'
        light.style.display = 'block'
        localStorage.removeItem('theme');
    })
}

export { theme }