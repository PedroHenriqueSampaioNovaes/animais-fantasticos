export default function initTabMenu() {
  const tabMenu = document.querySelectorAll('[data-tabmenu="menu"] li');
  const tabContent = document.querySelectorAll('[data-tabcontent="content"] section');

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