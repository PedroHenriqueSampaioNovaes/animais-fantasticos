function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const sessao = document.querySelector(this.getAttribute('href'));

    sessao.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linksInternos.forEach(item => {
    item.addEventListener('click', scrollSuave);
  });
}
initScrollSuave();

function initTabMenu() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach(item => {
        item.classList.remove('ativo');
      })

      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabMenu();

function initAccordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativo = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);

    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordionList();

function initShowSections() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const metadeWindow = window.innerHeight * 0.7;

    function showSection() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - metadeWindow) < 0
        if (sectionVisivel) {
          section.classList.add('ativo');
        }
      })
    }

    showSection();
    window.addEventListener('scroll', showSection);
  }
}
initShowSections();