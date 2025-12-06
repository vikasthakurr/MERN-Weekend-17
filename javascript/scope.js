// let b = 10;
// let a =20

{
  //   let b = 20;
}

// function a() {
// //   let b = 30;
//   console.log(b);
// }

// a();
// let value = 30;
function outer() {
  //   let value = 30;

  function inner() {
    // console.log(value);
    let b = 20;

    function inner1() {
      let value = 30;

      console.log(b);
    }
    b = 40;
    inner1();
  }
  inner();
}
outer();
