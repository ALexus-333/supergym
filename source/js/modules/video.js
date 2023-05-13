const playBtn = document.querySelector('.video__play');
const iframe = document.querySelector('.video__iframe');

export const initPlayClick = () => {
  if (playBtn && iframe) {
    playBtn.addEventListener('click', () => {
      playBtn.style.display = 'none';
      iframe.style.display = 'block';
    });
  }
};
