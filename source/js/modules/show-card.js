const cards = document.querySelectorAll('.trainers__item');

const clickOnCard = (e) => {
  cards.forEach((info) => {
    const cardsInfo = info.querySelector('.trainers__info');
    const cardsTitle = info.querySelector('h3');
    cardsInfo.classList.remove('flex');
    cardsTitle.classList.remove('none');
  });

  const card = e.currentTarget;

  const cardInfo = card.querySelector('.trainers__info');
  const cardPhoto = card.querySelector('.trainers__photo');
  const cardTitle = cardPhoto.querySelector('h3');

  cardInfo.classList.add('flex');
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
      const cardsInfo = item.querySelector('.trainers__info');
      const cardsTitle = item.querySelector('h3');

      cardsInfo.classList.remove('flex');
      cardsTitle.classList.remove('none');

      item.removeEventListener('click', clickOnCard);
    });
  }
};

export const onCardClick = () => {
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
