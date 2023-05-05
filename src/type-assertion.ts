let test: any;
test = "this is a string";
test as string;

function minuteToSecond(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    let value = parseFloat(param) * 60;
    return `${param} minute equals to ${value} seconds`;
  }
  if (typeof param === "number") {
    let value = param * 60;
    return value;
  }
}

const timeInNumber = minuteToSecond(12) as string;

const timeInString = minuteToSecond(`12`) as string;
