export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.registerEvents();
  }

  registerEvents() {
    const collapseButton = document.querySelector('.collapse__button');
    const collapseContent = document.querySelector('.collapse__content');
    let counter = 1;

    collapseButton.addEventListener('click', (event) => {
      if (counter % 2 !== 0) {
        collapseContent.style.height = '200px';
        collapseContent.style.visibility = 'visible';
        this.onClickCollapseDown(event);
        counter += 1;
      } else {
        this.onClickCollapseUp(event);
        counter += 1;
      }
    });
  }

  onClickCollapseDown(event) {
    const { currentTarget } = event;
    const collapseContent = currentTarget.nextElementSibling;

    collapseContent.style.animation = 'collapseDown 0.6s linear';
    collapseContent.style.display = 'block';
  }

  onClickCollapseUp(event) {
    const { currentTarget } = event;
    const collapseContent = currentTarget.nextElementSibling;

    collapseContent.style.animation = 'collapseUp 0.5s linear';
    collapseContent.style.height = '0';
    collapseContent.style.visibility = 'hidden';
  }
}
