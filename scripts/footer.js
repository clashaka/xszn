export default () => {
    const year = new Date().getFullYear();
    const footer = document.querySelector('footer small');
    footer.textContent = `© ${year} 行书指南`;
}