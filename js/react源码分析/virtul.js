function createElement(tag, attr, ...child) {
  return {
    tag, 
    attr,
    child
  }
}
function render(vnode, container) {
  if(typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }
  const dom = document.createElement(vnode.tag)
  if(vnode.attr) {
    Object.keys(attr).forEach(key => {
      if(key === 'className') key = 'class'
      dom.setAttribute(key, vnode.attrs[key])
    })
  }
  vnode.child.forEach( child => render( child, dom ) );
  return container.appendChild( dom ); 
}
const React = {
  createElement,
  render
}
let diffdom =  React.createElement('p', null, 'Hello, world!')

React.render(React.createElement('p', null, 'Hello, world!'), document.getElementById('root'))
  

React.render(React.createElement('div', null, React.createElement("h1", null, "Hello, world!"), React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), ".")), document.getElementById('root'))
