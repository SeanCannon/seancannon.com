((window, document, undefined) => {
  'use strict';

  const anchors = document.getElementsByTagName('A');

  const removeActiveClassFromAnchors = () => {
    [].forEach.call(anchors, (a) => {
      a.classList.remove('active');
    });
  };

  [].forEach.call(anchors, (a) => {
    a.addEventListener('click', (e) => {
      removeActiveClassFromAnchors();
      e.target.classList.add('active');
    });
  });

  window.addEventListener('hashchange', (e) => {
    window.setTimeout(() => {
      document.querySelector('a[href="' + window.location.hash + '"]').click();
    }, 100);
  });

  if (!window.location.hash) {
    window.location = '#background';
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    document.querySelector('a[href="' + window.location.hash + '"]').click();
  }

})(window, document);
