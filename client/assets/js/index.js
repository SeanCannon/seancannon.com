((window, document, undefined) => {
  'use strict';

  const anchors = document.getElementsByTagName('A');

  const removeActiveClassFromAnchors = () => {
    for (let a of anchors) {
      a.classList.remove('active');
    }
  };

  for (let a of anchors) {
    a.addEventListener('click', (e) => {
      removeActiveClassFromAnchors();
      e.target.classList.add('active');
    })
  }

  window.addEventListener('hashchange', (e) => {
    document.querySelector('a[href="' + window.location.hash + '"]').click();
  });

  if (!window.location.hash) {
    window.location = '#background';
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  } else {
    document.querySelector('a[href="' + window.location.hash + '"]').click();
  }

})(window, document);
