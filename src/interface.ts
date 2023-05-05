// type User = {
//     name: string;
//     age: number;
// }

interface IUser {
  name: string;
  age: number;
}

interface IAdvancedUser extends IUser {
  experience: number;
}

const developer: IAdvancedUser = {
  name: "Paul",
  age: 28,
  experience: 6,
};

interface IAddNumbers {
  (num1: number, num2: number): number;
}

type addNumbersType = (num1: number, num2: number) => number;

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;
