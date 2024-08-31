export default () => {
    class Card extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const template = document.querySelector('#card-template');
            const templateContent = template.content;
            const shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(templateContent.cloneNode(true));
        }

    }

    customElements.define('card-component', Card);
}