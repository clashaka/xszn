function search() {
    const form = document.querySelector('header form');
    const select = document.querySelector('header select');
    const input = document.querySelector("header input");

    if (localStorage.getItem("search")) {
        select.value = localStorage.getItem("search");
        switch (select.value) {
            case "baidu":
                form.action = "https://www.baidu.com/s";
                input.name = "wd";
                input.focus();
                break;
            case "google":
                form.action = "https://www.google.com/search";
                input.name = "q";
                input.focus();
                break;
            case "bing":
                form.action = "https://www.bing.com/search";
                input.name = "q";
                input.focus();
                break;
            default:
                form.action = "https://yandex.com/search/";
                input.name = "text";
                input.focus();
        };
    }

    select.addEventListener("change", () => {
        localStorage.setItem("search", select.value);
        switch (select.value) {
            case "baidu":
                form.action = "https://www.baidu.com/s";
                input.name = "wd";
                input.focus();
                break;
            case "google":
                form.action = "https://www.google.com/search";
                input.name = "q";
                input.focus();
                break;
            case "bing":
                form.action = "https://www.bing.com/search";
                input.name = "q";
                input.focus();
                break;
            default:
                form.action = "https://yandex.com/search/";
                input.name = "text";
                input.focus();
        };
    });
};

export { search };