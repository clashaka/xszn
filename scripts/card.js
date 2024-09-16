import link from "./link.js";

export default () => {
    const tabContent = document.querySelector('.tabpanel .tab-content');
    // console.log(link["生产"]["图片"][0].desc);
    for (const key in link) {
        const values = link[key]
        for (const value in values) {
            values[value].forEach(item => {
                const a = document.createElement('a');
                a.href = item.url;
                a.target = '_blank';
                a.innerHTML = `
                    <div class="card">
                        <figure class="card-head">
                            <div class="card-icon">
                                <img src="${item.icon}" alt="${item.title}" width="43" height="43">
                            </div>
                            <figcaption>
                                <p>${item.title}</p>
                                <small>${item.tag}</small>
                            </figcaption>
                        </figure>
                        <div class="card-body">
                            <small>${item.desc}</small>
                        </div>
                    </div>
                    `;
                tabContent.appendChild(a);
            })
        }
    }
}