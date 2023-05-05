type GenericTuple<X, Y> = [X, Y];

interface UserInterface {
  name: string;
  age: number;
}
type UserCredentials = {
  email: string;
};

const users: GenericTuple<UserInterface, UserCredentials> = [
  {
    name: "Phoenix",
    age: 24,
  },
  {
    email: "phoenixman21@gmail.com",
  },
];

interface IStudents<T> {
  name: string;
  roll: number;
  remark: T;
}

const student1: IStudents<boolean> = {
  name: "Jason",
  roll: 4,
  remark: false,
};
const student2: IStudents<string> = {
  name: "John",
  roll: 5,
  remark: `you can't see me`,
};

interface IRemark {
  message: string;
}
const student3: IStudents<IRemark> = {
  name: "Raaj",
  roll: 1,
  remark: {
    message: `naam toh suna hogah`,
  },
};

interface IResidant<X, Y = null> {
  house: X;
  flat?: Y;
}

const resident1: IResidant<string> = {
  house: "Jononi 18",
};
