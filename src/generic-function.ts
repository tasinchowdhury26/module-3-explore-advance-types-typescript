//Arrow function
const createArray1 = (param: string): string[] => {
  return [param];
};

const createArray2 = <T, U = null>(param1: T, param2: U): [T, U] => {
  return [param1, param2];
};

function createArray3<T, U = null>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

const result1 = createArray2<string, Array<string>>("I love this city.", [
  "NYC",
]);
const result2 = createArray2<{ message: string }, string>(
  { message: "Hi there" },
  `All is well`
);

const actor = {
  name: "Johny Depp",
  netWorth: 120000000000,
};

const makeMovie = <T>(param: T) => {
  const actress = "Amber Heard";
  return { ...param, actress };
};
const movie1 = makeMovie(actor);

movie1.name;
