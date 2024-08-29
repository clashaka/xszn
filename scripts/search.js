export default () => {
    const form = document.querySelector('header form');
    const select = document.querySelector('header select');
    const input = document.querySelector("header input[type='search']");

    select.addEventListener("change", () => {
        switch (select.value) {
            case "Google":
                form.action = "https://www.google.com/search";
                input.focus();
                break;
            case "Bing":
                form.action = "https://www.bing.com/search";
                input.focus();
                break;
            default:
                form.action = "https://search.yahoo.com/search";
                input.focus();
        }
    })
}