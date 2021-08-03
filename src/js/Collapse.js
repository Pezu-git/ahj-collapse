/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.hide();
  }

  hide() {
    this.collapseBodyElement = this.container.querySelector('.element-body');
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
      if (this.collapseBodyElement.dataset.ariaExpanded === 'false') {
        this.collapseBodyElement.style.display = 'block';
        const textParams = this.collapseBodyElement
          .querySelector('.element-text')
          .getBoundingClientRect();
        setTimeout(() => {
          this.collapseBodyElement.style.height = `${textParams.height}px`;
          btn.textContent = 'Hide!';
        }, 50);
        this.collapseBodyElement.dataset.ariaExpanded = 'true';
      } else {
        this.collapseBodyElement.dataset.ariaExpanded = 'false';
        this.collapseBodyElement.style.height = 0;
        setTimeout(() => {
          this.collapseBodyElement.style.display = 'none';
          btn.textContent = 'Show';
        }, 50);
      }
    });
  }
}
