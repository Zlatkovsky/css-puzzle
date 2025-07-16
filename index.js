const loadButton = document.getElementById("load");

loadButton.addEventListener("click", onLoadButtonClicked);

function onLoadButtonClicked() {
  loadButton.setAttribute("disabled", "disabled");

  const script = document.createElement("script");
  script.src = "./dynamic.js";
  script.onload = () => {
    window.dynamicContent.render(document.getElementById("dynamic-content"));
  };
  document.head.appendChild(script);

  loadButton.removeEventListener("click", onLoadButtonClicked);

  document.getElementById("what-happened-link").style.display = "block";
}
