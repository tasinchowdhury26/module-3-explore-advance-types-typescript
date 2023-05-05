const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = `This is the test data.`;
    if (data) {
      resolve(data);
    } else {
      reject(`faled to resolve data.`);
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

interface IDataType {
  firstName: string;
  lastName: string;
}

const makePromiseWithObject = (): Promise<IDataType> => {
  return new Promise<IDataType>((resolve, reject) => {
    const data: IDataType = { firstName: "John", lastName: "Doe" };
    if (data) {
      resolve(data);
    } else {
      reject(`faled to resolve data.`);
    }
  });
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  return await response.json();
};

const getTodoData = async () => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();
