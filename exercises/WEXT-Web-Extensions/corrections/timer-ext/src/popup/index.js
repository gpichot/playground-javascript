const title = document.querySelector("h1");

function displayCurrentTime() {
  const date = new Date().toLocaleTimeString();

  title.replaceChildren(date);
}

displayCurrentTime();

setInterval(displayCurrentTime, 1000);

chrome.storage.sync.get("color").then((values) => {
  const color = values.color;

  title.style.color = color;
});
