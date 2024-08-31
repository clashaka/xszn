export default () => {
    const form = document.querySelector('header form');
    const select = document.querySelector('header select');
    const input = document.querySelector("header input");

    select.addEventListener("change", () => {
        switch (select.value) {
            case "Baidu":
                form.action = "https://www.baidu.com/s";
                input.name = "wd";
                input.focus();
                break;
            case "Google":
                form.action = "https://www.google.com/search";
                input.name = "q";
                input.focus();
                break;
            case "Bing":
                form.action = "https://www.bing.com/search";
                input.name = "q";
                input.focus();
                break;
            case "Yandex":
                form.action = "https://yandex.com/search/";
                input.name = "text";
                input.focus();
                break;
            default:
                form.action = "https://search.yahoo.com/search";
                input.name = "q";
                input.focus();
        };
    });
};