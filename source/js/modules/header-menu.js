let button = document.querySelector('.page-header__button');
let logo = document.querySelector('.page-header__logo');
let header = document.querySelector('.page-header');
let listMenu = document.querySelector('.page-header__list');
let links = document.querySelectorAll('.page-header__link');
let items = document.querySelectorAll('.page-header__item');

const switchMenu = () => {
  header.classList.remove('page-header--nojs');

  button.addEventListener('click', () => {
    if (button.classList.contains('page-header__button--close')) {
      button.classList.remove('page-header__button--close');
      button.classList.add('page-header__button--open');
      logo.classList.remove('page-header__logo--close');
      logo.classList.add('page-header__logo--open');
      header.classList.remove('page-header--close');
      header.classList.add('page-header--open');
      listMenu.classList.remove('page-header__list--close');
      listMenu.classList.add('page-header__list--open');
      links.forEach((element) => {
        element.classList.remove('page-header__link--close');
        element.classList.add('page-header__link--open');
      });
      items.forEach((element) => {
        element.classList.remove('page-header__item--close');
        element.classList.add('page-header__item--open');
      });
    } else {
      button.classList.add('page-header__button--close');
      button.classList.remove('page-header__button--open');
      logo.classList.add('page-header__logo--close');
      logo.classList.remove('page-header__logo--open');
      header.classList.add('page-header--close');
      header.classList.remove('page-header--open');
      listMenu.classList.add('page-header__list--close');
      listMenu.classList.remove('page-header__list--open');
      links.forEach((element) => {
        element.classList.add('page-header__link--close');
        element.classList.remove('page-header__link--open');
      });
      items.forEach((element) => {
        element.classList.add('page-header__item--close');
        element.classList.remove('page-header__item--open');
      });
    }
  });
};

export {switchMenu};
