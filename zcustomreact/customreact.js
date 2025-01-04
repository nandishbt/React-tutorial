function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children[0];

  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}

reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: ["Google"],
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
