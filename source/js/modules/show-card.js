const cards = document.querySelectorAll('.trainers__item');

const clickOnCard = (event) => {
  cards.forEach((info) => {
    const cardsTitle = info.querySelector('h3');
    cardsTitle.classList.remove('none');
  });

  const card = event.currentTarget;

  const cardPhoto = card.querySelector('.trainers__photo');
  const cardTitle = cardPhoto.querySelector('p');

  cardTitle.classList.add('none');
};

const showCardInfo = () => {
  if (cards) {
    cards.forEach((item) => {
      item.addEventListener('click', clickOnCard);
    });
  }
};

const stopShowCardInfoByClick = () => {
  if (cards) {
    cards.forEach((item) => {
      const cardsTitle = item.querySelector('h3');

      cardsTitle.classList.remove('none');

      item.removeEventListener('click', clickOnCard);
    });
  }
};

export const initCardClick = () => {
  let isByClick = false;

  if (window.innerWidth <= 1199) {
    isByClick = true;
    showCardInfo();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1199 && !isByClick) {
      showCardInfo();
      isByClick = true;
    } else if (window.innerWidth > 1199 && isByClick) {
      stopShowCardInfoByClick();
      isByClick = false;
    }
  });
};
