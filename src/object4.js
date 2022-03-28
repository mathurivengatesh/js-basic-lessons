const book = {
  'main title': 'JavaScript',
  'sub-title': 'The Definition guide',
  for: 'all audiences',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }
}

/* book = null
if (book) {
  if (book.subtitle) {
    len = book.s.length
    console.log(len)
  } else { console.log('book.subtitle undefined:') }
} else { console.log('book is null') }
len = book && book.subtitle && book.subtitle.length
if (len) console.log(len) */
console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete o6.toString

delete Object.prototype
