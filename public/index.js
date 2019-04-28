const ws = new WebSocket('ws://localhost:8080');
const doc = document;

function createNode(content){
  const element = doc.createElement('div');
  element.innerHTML = content;
  return element;
}


ws.onmessage = function(e) {
  var msg = e.data;
  console.log(msg);
  doc.getElementById('content').appendChild(createNode(msg))
};
