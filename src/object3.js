function getChild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
const o5 = {}
// console.log(o5)
o5.x = 100
// console.log(o5)
const p = getChild(o5)
// console.log(p)
p.y = 200
const q = getChild(p)
q.z = 300
// console.log(q)
console.log('q.x + q.y + q.z' + (q.x + q.y + q.z))
console.log('p.x + p.y ' + (p.x + p.y))
console.log('o5.x + o5.y ' + (o5.x + o5.y))
console.log('o5.x ' + o5.x)
