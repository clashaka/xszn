import link from "./link.js";

export default () => {
    // 在推荐页生成 Tabs

    const tabContent = document.querySelector('.tabpanel .tab-content');

    let linkArr = [];

    for (const key in link) {
        const values = link[key];
        for (const value of values) {
            linkArr.push(value);
        }
    }

    while (linkArr.length > 0) {
        const random = Math.floor(Math.random() * linkArr.length);

        const a = document.createElement('a');
        a.href = linkArr[random].url;
        a.target = '_blank';
        a.innerHTML = `
                    <div class="card">
                        <figure class="card-head">
                            <div class="card-icon">
                                <img src="${linkArr[random].icon}" alt="${linkArr[random].title}" width="43" height="43">
                            </div>
                            <figcaption>
                                <p>${linkArr[random].title}</p>
                                <small>${linkArr[random].tag}</small>
                            </figcaption>
                        </figure>
                        <div class="card-body">
                            <small>${linkArr[random].desc}</small>
                        </div>
                    </div>
                    `;
        tabContent.appendChild(a);
        linkArr.splice(random, 1)
    }

}