const colorInput = document.querySelector("#color");

chrome.storage.sync.get(["color"]).then((values) => {
  const color = values.color || "black";

  colorInput.value = color;
});

colorInput.addEventListener("change", () => {
  const color = colorInput.value;

  chrome.storage.sync.set({
    color: color,
  });
});
