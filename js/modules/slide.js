import debounce from './debounce.js';

export class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.activeClass = 'active';
    this.changeSlideEvent = new Event('changeSlide');

    this.dist = {startX: 0, finalPosition: 0, movement: 0}
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform 0.4s' : '';
  }

  onStart(event) {
    if (event.type === 'mousedown') { 
      event.preventDefault();
      this.dist.startX = event.clientX;
      this.wrapper.addEventListener('mousemove', this.onMove);
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      this.wrapper.addEventListener('touchmove', this.onMove);
    }
    this.transition(false);
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  changePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onMove(event) {
    const positionClick = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const position = this.changePosition(positionClick);
    this.moveSlide(position);
  }

  onEnd(event) {
    const moveType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.transition(true);
    this.changeSlideOnEnd();
  }

  getDistanceSlides(slideItem) {
    const margin = (this.wrapper.offsetWidth - slideItem.offsetWidth) / 2;
    return -(slideItem.offsetLeft - margin);
  }

  slidesConfig() {
    this.arraySlide = [...this.slide.children].map((element) => {
      const position = this.getDistanceSlides(element);
      return { position, element };
    });
  }

  getIndexSlides(index) {
    const last = this.arraySlide.length - 1;
    this.indexSlides = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    }
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.indexSlides.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.indexSlides.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.indexSlides.active);
    }
  }
  
  activeNextSlide() {
    if (this.indexSlides.next !== undefined) this.changeSlide(this.indexSlides.next);
  }

  activePrevSlide() {
    if (this.indexSlides.prev !== undefined) this.changeSlide(this.indexSlides.prev);
  }

  changeActiveSlide() {
    this.arraySlide.forEach((slide) => slide.element.classList.remove(this.activeClass));
    this.arraySlide[this.indexSlides.active].element.classList.add(this.activeClass);
  }

  changeSlide(index) {
    const activeSlide = this.arraySlide[index];
    this.moveSlide(activeSlide.position);
    this.getIndexSlides(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveSlide();
    this.wrapper.dispatchEvent(this.changeSlideEvent);
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.indexSlides.active);
    }, 500);
  }

  resizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.changeSlide(2);
    this.resizeEvent();
    return this;
  }
}

export default class NavSlide extends Slide {
  constructor(wrapper, slide) {
    super(wrapper, slide);
    this.bindControl();
  }

  addArrow(prev, next) {
    this.btnPrev = document.querySelector(prev);
    this.btnNext = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.btnPrev.addEventListener('click', this.activePrevSlide);
    this.btnNext.addEventListener('click', this.activeNextSlide);
  }

  createControls() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';
    this.arraySlide.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    })
    this.wrapper.appendChild(control);
    return control;
  }

  activeControlItem() {
    this.arrayControls.forEach((control) => control.classList.remove(this.activeClass));
    this.arrayControls[this.indexSlides.active].classList.add(this.activeClass);
  }

  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeSlide', this.activeControlItem);
  }

  addControl(customControls) {
    const controls = customControls !== undefined ? document.querySelector(customControls) : this.createControls();
    this.arrayControls = [...controls.children];
    this.activeControlItem();
    this.arrayControls.forEach(this.eventControl);
  }

  bindControl() {
    this.activeControlItem = this.activeControlItem.bind(this);
    this.eventControl = this.eventControl.bind(this);
  }
}
