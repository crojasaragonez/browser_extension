document.addEventListener('click', (e) => {
  if (e.target.classList.contains('list-group-item')) {
    var url = e.target.getAttribute('url');

    //cross browser hack
    browser = window.msBrowser || window.browser || window.chrome;
    browser.tabs.create({ url: url }).then((tab) => {
      console.log('Tab was opened');
    });
    window.close();
  }
});

