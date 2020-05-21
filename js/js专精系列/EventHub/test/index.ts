import EventHub from '../src/index'


const test1 = () => {
  const eventhub = new EventHub()
  console.assert(eventhub instanceof Object, '不是对象')
}


const test2 = () => {
  const eventhub = new EventHub()
  eventhub.on('xx', (data) => {
    console.log(data);
  })
  eventhub.emit('xx', 'name')
}

const test3 = () => {
  const eventhub = new EventHub()
  let fn1 = (data) => {
    console.log(data);
  }
  eventhub.on('xx', fn1)
  eventhub.off('xx', fn1)
  eventhub.emit('xx', 'name')
}

test1()
test2()
test3()