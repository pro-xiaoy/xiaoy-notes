function createElement(tag, attr, ...child) {
  return {
    tag,
    attr,
    child,
  };
}
function render(vnode, container) {
  return container.appendChild(_render(vnode));
}
function _render(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === "boolean")
    vnode = String(vnode);
  if (typeof vnode === "number") vnode = String(vnode);

  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return textNode;
  }

  if (typeof vnode.tag === "function") {
    const compontent = createComponent(vnode.tag, vnode.attr);
    setComponentProps(compontent, vnode.attrs);
    return component.base;
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attr) {
    Object.keys(attr).forEach((key) => {
      if (key === "className") key = "class";
      dom.setAttribute(key, vnode.attrs[key]);
    });
  }
  vnode.child.forEach((child) => render(child, dom));
  return dom;
}

function createComponent(compontent, props) {
  let inst; 
  if(compontent.prototype && compontent.prototype.render) {
    inst = new compontent( props )
  } else {
    inst = new Compontent(props)
    inst.constructor = compontent
    inst.render = function() {
      return this.constructor(props)
    }
  }
  return inst
}

function setComponentProps(compontent, props) {
  if(!compontent.base) {
    if(compontent.componentWillMount) compontent.componentWillMount()
  } else if(component.componentWillReceiveProps) {
    component.componentWillReceiveProps()
  }
  compontent.props = props

  renderCompontent( compontent )
}

function renderCompontent(component) {
  let base;
  const renderer = component.render()
  base = _render(renderer)

  if(component.base) {
    if(component.componentDidUpdate) component.componentDidUpdate()
  }else if(component.componentDidMount) {
    component.componentDidMount()
  }
  if(component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base)
  }

  component.base = base
  base._component = component

}


class Compontent {
  constructor( props = {}) {
    this.state = {}
    this,props = props
  }
}


class Welcome {
  constructor(props) {
    this.props = props
  }
  render() {
    return React.createElement('div', null, '3213213321321')
  }
}
const React = {
  createElement,
  render
}

React.render(React.createElement(Welcome,  null), document.getElementById('root'))
