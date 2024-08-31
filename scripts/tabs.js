import tab from "./tab.js";

export default () => {

    // console.log(tab["全部"]["享受"][0]);
    const tabs = document.querySelector('main .tabs');

    tabs.textContent = ''

    for (const key in tab["全部"]) {

        for (const value of tab["全部"][key]) {
            console.log(value);
            const h2 = document.createElement('h2')
            h2.textContent = value
            tabs.appendChild(h2)
        }
    }
}