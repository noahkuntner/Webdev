chrome.storage.local.get('colour', (response) => {
    if (response.colour) {
      document.body.style.backgroundColor = response.colour;
    }
  });

chrome.runtime.onMessage.addListener(request => {
    if (request.colour) {
      document.body.style.backgroundColor = request.colour;
    }
  });