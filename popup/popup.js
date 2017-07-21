document.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-group-item")) {
    var url = e.target.getAttribute("url");

    chrome.tabs.create({ url: url }).then((tab) => {
      console.log('new tab created');
    }, (error) => {
      console.log(`Error: ${error}`);
    });
    window.close();
  }
});

