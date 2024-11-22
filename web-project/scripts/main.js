const form = document.querySelector('form');
const input = document.querySelector('input[type=search]');
const submit = document.querySelector('input[type=submit]');
const similarity = document.querySelector('#similarity');
const div = document.querySelector('div.content');
const errorDiv = document.querySelector('div.message');

let domainName = ''
let regex = /\/.*/;

input.addEventListener('input', () => {
    domainName = input.value;
    domainName = domainName.replace('https://', '');
    domainName = domainName.replace('http://', '');
    domainName = domainName.replace('www.', '');
    domainName = domainName.replace(regex, '');
});

form.addEventListener('submit', e => {
    div.innerHTML = '';
    e.preventDefault();
    const domain = input.value;
    fetchData(domainName);
});

similarity.addEventListener('click', e => {
    window.open(`https://pro.similarweb.com/api/WebsiteOverview/getsimilarsites?key=${domainName}`, '_blank');
});

async function fetchData(domain) {
    try {
        const res = await fetch(`https://data.similarweb.com/api/v1/data?domain=${domain}`);
        const data = await res.json();
        showData(data);
    } catch (error) {
        errorDiv.innerHTML = "<p>获取失败。请前往：<a href='https://cors-anywhere.herokuapp.com/' target='_blank'>https://cors-anywhere.herokuapp.com/</a> 进行跨域请求</p>";
    }
}
function showData(data) {
    const CountryRank = document.createElement('p');
    const Description = document.createElement('p');
    const EstimatedMonthlyVisits = document.createElement('p');
    const Title = document.createElement('h2');
    const GlobalRank = document.createElement('p');
    const TopKeywords = document.createElement('p');
    const TopCountryShares = document.createElement('p');

    CountryRank.innerHTML = "<strong>国家 / 地区排名：</strong>" + data.CountryRank.CountryCode + " / " + new Intl.NumberFormat().format(data.CountryRank.Rank);
    Description.textContent = data.Description;
    EstimatedMonthlyVisits.innerHTML = "<hr><strong>月访问量：</strong>";
    Title.textContent = data.Title;
    GlobalRank.innerHTML = "<hr><strong>全球排名：</strong>" + new Intl.NumberFormat().format(data.GlobalRank.Rank);
    TopKeywords.innerHTML = "<hr><strong>热门自然搜索词：</strong>";
    TopCountryShares.innerHTML = "<hr><strong>热门国家 / 地区：</strong>";

    objData(EstimatedMonthlyVisits, "EstimatedMonthlyVisits")
    arrData(TopKeywords, "TopKeywords", "Name")
    arrData(TopCountryShares, "TopCountryShares", "CountryCode")

    div.appendChild(Title);
    div.appendChild(Description);
    div.appendChild(GlobalRank);
    div.appendChild(CountryRank);
    div.appendChild(EstimatedMonthlyVisits);
    div.appendChild(TopKeywords);
    div.appendChild(TopCountryShares);

    // 遍历对象数据
    function objData(element, obj) {
        for (const key in data[obj]) {
            const keys = key
            const values = data[obj][key]
            let number = ''

            if (values < 100000) {
                const k = values / 1000;
                number = k.toFixed(2) + "K"

            } else if (values < 1000000000) {
                const m = values / 1000000;
                number = m.toFixed(2) + "M"
            } else {
                const b = values / 1000000000;
                number = b.toFixed(2) + "B"
            }

            const item = keys + ": " + number
            const p = document.createElement('p');
            p.textContent = item;
            element.appendChild(p);
        }
    }

    //遍历数组数据
    function arrData(element, arr, name) {
        for (const key in data[arr]) {
            const item = data[arr][key][name];
            const p = document.createElement('p');
            const top = Number(key) + 1;
            p.textContent = top + "：" + item;
            element.appendChild(p);
        }
    }
}