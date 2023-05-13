import {removeClass} from '../utils/remove-class';

const tabBtns = document.querySelectorAll('.tabs__btn');
const tabLists = document.querySelectorAll('.tabs__list');

export const initTabBtnClick = () => {
  removeClass(tabBtns);
  removeClass(tabLists);

  tabBtns.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabBtns.forEach((btn) => {
        btn.classList.remove('active');
      });

      tabLists.forEach((list) => {
        list.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    });
  });
};
