type User = {
  id: number;
  userName: string;
  passoword: string;
  createAdt: Date;
  updateAdt: Date;
};

const user: User = {
    id: 1,
    userName: 'michel',
    passoword: 'michel',
    createAdt: new Date(),
    updateAdt: new Date(),
};

type UserPartial = Partial<User>;

type NEwUser = Omit<User, 'id'>;
  
type SeachUser = Pick<User, 'userName'>;


console.log(user);