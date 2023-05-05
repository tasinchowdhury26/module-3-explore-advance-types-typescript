type AreaType = {
  height: number;
  width: number;
};

type RectangleType = {
  [key in keyof AreaType]: AreaType[key];
};

type Calculate<T> = {
  readonly [key in keyof T]: T[key];
};

const resultN: Calculate<{ num1: number; num2: number }> = {
  num1: 34,
  num2: 51,
};

// resultN.num1 = 44;
