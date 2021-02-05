import { users } from "./data";

const resolvers = {
  Query: {
    user: ({ id }) => {
      return users.find((user) => user.id === id);
    },
    users: () => {
      return users;
    },
  },
  Mutation: {
    createUser: ({ id, city, fio, email, phoneNumber }) => {
      const newUser = { id, city, fio, email, phoneNumber };
      users.push(newUser);
      return newUser;
    },
    updateUser: ({ id, city, fio, email, phoneNumber }) => {
      let newUser = users.find((user) => user.id === id);
      newUser.fio = fio;
      newUser.email = email;
      newUser.city = city;
      newUser.phoneNumber = phoneNumber;
      return newUser;
    },
    deleteUser: ({ id }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) throw new Error("User not found");
      const deletedUsers = users.splice(userIndex, 1);
      return deletedUsers[0];
    },
  },
};

export default resolvers;
