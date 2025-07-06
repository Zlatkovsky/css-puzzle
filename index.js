const loadButton = document.getElementById("load");

loadButton.addEventListener("click", addDynamicContent);

function addDynamicContent() {
  const script = document.createElement("script");
  script.src = "./dynamic.js";
  script.onload = () => {
    window.dynamicContent.render(document.getElementById("dynamic-content"));
  };
  document.head.appendChild(script);

  loadButton.removeEventListener("click", addDynamicContent);
}
