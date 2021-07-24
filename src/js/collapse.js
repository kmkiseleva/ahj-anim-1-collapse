export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.registerEvents();
  }

  registerEvents() {
    const collapseButton = document.querySelector('.collapse__button');

    collapseButton.addEventListener('click', (event) => {
      this.onClickCollapse(event);
    });
  }

  onClickCollapse(event) {
    const { currentTarget } = event;
    const collapseContent = currentTarget.nextElementSibling;

    if (collapseContent.classList.contains('hidden')) {
      collapseContent.classList.remove('hidden');
      collapseContent.style.animation = 'collapseDown 0.6s linear';
    } else {
      collapseContent.classList.add('hidden');
      collapseContent.style.animation = 'collapseUp 0.5s linear';
    }
  }
}
