const buttons = document.querySelectorAll('.catalog__button-cover');
const itemsContent = document.querySelectorAll('.catalog__item-content');

const showCard = () => {
  for (let i = 0; i <= buttons.length; i++) {
    let indexButton = i;
    let button = buttons[i];
    button.addEventListener('click', () => {
      for (let j = 0; j <= itemsContent.length; j++) {
        let indexContent = j;
        let itemContent = itemsContent[j];
        if (indexButton === indexContent) {
          itemContent.classList.add('catalog__item-content--max-index');
        } else {
          itemContent.classList.remove('catalog__item-content--max-index');
        }
      }
    }, {passive: true});
  }
};

export {showCard};
