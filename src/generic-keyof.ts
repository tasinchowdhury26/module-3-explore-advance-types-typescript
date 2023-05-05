type TestType = {
  name: string;
  id: number;
  email: string;
};

type FromTestType = "name" | "id" | "email";

type FromTestTypeWithKeyof = keyof TestType; // it also holds 'name' | 'id' | 'email'

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const test1 = getProperty(
  { name: "Frank", id: 8, email: "frankcastle@gmail.com" },
  ""
);
