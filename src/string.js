/* eslint-disable semi */
// multi line string using single quote does't work
const my_name = 'NamefieldEmpty';

const song1 = 'I like arrahman songs and aniruth songs';
console.log(song1);

const hello3 = 'hello my name is ' + mathuri + '.Nice to meet you';
console.log(hello3);

const hello4 = `hello my name is ${mathuri}. Nice to meet you.Iam ${1 + 100}years old`;
console.log(hello4);

const html = `<div>
                <h2>${mathuri}</h2>
               <p>${hello}</p>
               </div>
               `;
console.log(html);
document.body.innerHTML = html;
