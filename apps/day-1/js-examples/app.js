var aaa = 10;

console.log('before aaa:', aaa);

// if(true) 
function someFn() {
  let aaa = 20;
  console.log('inside aaa:', aaa);
}

someFn()

console.log('after aaa:', aaa);
