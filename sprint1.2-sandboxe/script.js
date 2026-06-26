// an array it's like storage that can save multi devrse values
let colors = ["red", "blue", 1, 1.2, true];

// you can call spesfic index by making colros[any number from an array] or if you want last index you can use  [colors.length - 2]
console.log(colors[colors.length - 2]);

//objects are list of proprites and ever prop has it's vaule

let laptop = {
  //laptop is an object

  ram: 16, // ram is a proprity and 16 is a value
  storage: "1tb",
};
// destrcuting array is a way for switching placses in index or assiging a varibles for the elemnts inside the array
let x = ["a", "b", "c"];

let [red, blue, purple] = x;

console.log(blue);

//destrcuting obejct is assgining a varible in modren way to a proprties

let laptop2 = {
  //laptop is an object

  ram: 16, // ram is a proprity and 16 is a value
  storage: "1tb",
};

let { ram, storage: slot } = laptop2;

// spread is taking current packs as copies and adjusting them while orginal pack still unchanged

let plane = ["air", "pilot", "sky"];

let unpackedPlane = [...plane, "birds", "windows"];

let laptop3 = { ram: 32, storage: "2tb" };

let updateLaptop3 = { ...laptop2, monitor: "144hz" };

console.log(plane);
console.log(unpackedPlane);
console.log(laptop3);
console.log(updateLaptop3);
// rest is taking an elemnt from an array or an obbject making it indiviual varible

let bottleOfWater = { water: "liquid", plastic: "recycle", pureWater: "true" };

let { water, ...others } = bottleOfWater;

console.log(water);
console.log(bottleOfWater);
