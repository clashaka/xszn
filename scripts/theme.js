export default () => {

    const input = document.querySelector("input[type=checkbox]");
    const light = document.querySelector("#light");
    const dark = document.querySelector("#dark");

    input.addEventListener("change", () => {
        if (input.checked) {
            // 如果选中，设置为暗模式
            light.style.display = "none";
            dark.style.display = "block";
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            // 如果未选中，设置为亮模式
            light.style.display = "block";
            dark.style.display = "none";
            document.documentElement.removeAttribute("data-theme");
        }
    })
}