/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
function getChild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
const o4 = { x: "dont't change this value" }
// console.log(o4.x)
const p = Object.create(o4)
// console.log(p)
const o4 = null
const p = getChild(o4)// Object.create(o4)
// console.log(p)


