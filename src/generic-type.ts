type GenericArray<T> = Array<T>;

const numbersArr: GenericArray<number> = [1, 7, 3, 67];
const stringArr: GenericArray<string> = ["d", "a", "m", "n"];
const booleanArr: GenericArray<boolean> = [true, false, false, true];

type UserType = {
  name: string;
  id: number;
};

const usersCollection: GenericArray<UserType> = [
  {
    name: "Paula",
    id: 1,
  },
  {
    name: "Veronica",
    id: 2,
  },
];
