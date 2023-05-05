interface MandatoryProps {
  name: string;
  email: string;
}

const authenticate = <T extends MandatoryProps>(userObj: T) => {
  const status = "logged-in";
  return { ...userObj, status };
};

interface UserType {
  name: string;
  email: string;
  age: number;
  id: number;
  address?: string;
}

const user1 = {
  name: "Antonio",
  email: "ant@yahoo.com",
  age: 32,
  id: 7,
};

const user1Reg = authenticate(user1);

user1Reg.status;
