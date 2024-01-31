const turtleDiv = document.getElementById('turtles');
window.onscroll = () => {
  if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 500)) {
      const turtles = Array.from({length:500}).map(() => {
        const headerNode = document.createElement("h1");
        const turtleNode = document.createTextNode("🐢");
        headerNode.appendChild(turtleNode);
        return headerNode;
      })
      turtleDiv.append(...turtles);
  }
}
