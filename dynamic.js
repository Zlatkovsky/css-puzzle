window.dynamicContent = {
  render(componentDiv) {
    const cssNode = document.createElement("link");
    cssNode.rel = "stylesheet";
    cssNode.href = "./dynamic.css";
    document.head.appendChild(cssNode);

    const somethingFun = document.createElement("div");
    somethingFun.className = "something-fun";
    componentDiv.appendChild(somethingFun);
  },
};
