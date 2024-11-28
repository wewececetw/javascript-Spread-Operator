// import { apiKey } from "./util";

// import apiKey from "./util";

// import * as result from "./util"

// import { apiKey, a2323, car as BWM } from "./util";

// console.log(BWM);

const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34,
};

const newHobbies = ["Redding"];

//兩個數組結合成大數組
// const mergedHobbies = [hobbies, newHobbies];
// 將數組內元素拆分成資料塞入該陣列
const mergedHobbies = [...hobbies, ...newHobbies];

console.log(mergedHobbies);
// 將物件內元素拆分成資料塞入該陣列
const extandedUser = {
  isAdmin: true,
  ...user,
};

console.log(extandedUser);
