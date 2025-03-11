// Add progress bar styles
const style = document.createElement('style');
style.textContent = `
.pltr {
  background-color: red;
  width: 0;
  height: 2px;
  position: fixed;
  top: 0;
  z-index: 99999999;
}`;
document.head.appendChild(style);

const bodyNode = document.body;
const progressNode = document.createElement('div');
progressNode.setAttribute('class', 'pltr');
bodyNode.insertBefore(progressNode, bodyNode.firstChild);
const pltrNode = document.querySelector('.pltr');

/**
 * Formula at the bottom of the page
 * scrollHeight + clientHeight = documentHeight
 * We need to find out percentage of SH + CH w.r.t DH
 */
const calculateProgress = () => {
  const documentHeight = document.body.scrollHeight;
  const scrollHeight = window.pageYOffset;
  const clientHeight = document.documentElement.clientHeight;
  return 100 - ((documentHeight - (scrollHeight + clientHeight)) / documentHeight) * 100;
};

const updateProgress = (progress) => {
  pltrNode.style.width = `${progress}%`;
};

updateProgress(calculateProgress());

window.addEventListener('scroll', () => {
  const progress = calculateProgress();
  updateProgress(progress);
});
