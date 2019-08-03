const bodyNode = document.body;
const progressNode = document.createElement('div');
progressNode.setAttribute('class', 'pltr');
bodyNode.insertBefore(progressNode, bodyNode.firstChild);

/**
 * Formula at the bottom of the page
 * scrollHeight + clientHeight = documentHeight
 * We need to find out percentage of SH + CH w.r.t DH
 * @type {number}
 */
window.addEventListener('scroll', () => {
  const progress = 100 - ((document.body.scrollHeight - (window.pageYOffset + document.documentElement.clientHeight))/document.body.scrollHeight)*100;
  document.querySelector('.pltr').style.width = `${progress}%`;
});
