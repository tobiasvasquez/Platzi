function fruits() {
  if (true) {
    var fruit1 = "Apple"; //Function Scope
    let fruit2 = "Strawberry"; //Block Scope
    const fruit3 = "Pineapple"; // Block Scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();
