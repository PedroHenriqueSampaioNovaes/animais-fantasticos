import debounce from './debounce.js';

export default class ShowSections {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeWindow = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.metadeWindow),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      }
    });
    this.allSectionsAppeared();
  }

  addScrollSectionEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addScrollSectionEvent();
    }
    return this;
  }

  allSectionsAppeared() {
    if (this.sections[this.sections.length - 1].classList.contains('ativo')) this.stop();
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
