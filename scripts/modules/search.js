function search() {
    const form = document.querySelector('header form');
    const select = document.querySelector('header select');
    const input = document.querySelector("header input");

    function setSearch(value) {
        switch (value) {
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

    if (localStorage.getItem("search")) {
        select.value = localStorage.getItem("search");
        setSearch(select.value);
    }

    select.addEventListener("change", () => {
        localStorage.setItem("search", select.value);
        setSearch(select.value);
    });
};

export { search };