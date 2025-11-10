// Add progress bar styles
const style = document.createElement('style');
const height = '2px';
style.textContent = `
#pltr {
  background-color: red;
  width: 0;
  min-height: ${height};
  max-height: ${height};
  overflow-x: visible;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999999;
}`;
document.head.appendChild(style);

const progressNode = document.createElement('div');
progressNode.setAttribute('id', 'pltr');
document.body.appendChild(progressNode);
const pltrNode = document.getElementById('pltr');

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
  pltrNode.style.width = `${progress}vw`;
};

updateProgress(calculateProgress());

window.addEventListener('scroll', () => {
  const progress = calculateProgress();
  updateProgress(progress);
});
