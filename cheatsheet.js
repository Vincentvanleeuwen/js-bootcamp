//  -------------- Cloning an array  --------------

const foo = ["1", "2", "3"];
let bar = [...foo];
let bar.push("4");

console.log(bar);
// ["1", "2", "3", "4"];



// --------------  Async Function --------------

function fooAfterTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await fooAfterTwoSeconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
