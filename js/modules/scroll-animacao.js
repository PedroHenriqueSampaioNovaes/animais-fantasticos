export default function initShowSections() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const metadeWindow = window.innerHeight * 0.7;
    
    function showSection() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - metadeWindow) < 0;

        if(sectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      })
    }

    showSection();
    window.addEventListener('scroll', showSection);
  }
}