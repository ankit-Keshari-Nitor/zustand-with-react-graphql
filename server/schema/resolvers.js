const { fakeData } = require("../fakeData");
const lodesh = require("lodash");
const resolvers = {
  Query: {
    // Get All users
    users() {
      return fakeData;
    },
    // Get user by ID
    user(parent, args) {
      const id = args.id;
      const user = lodesh.find(fakeData, { id: Number(id) });
      return user;
    },
    // Get user by Name
    userByName(parent, args) {
      const name = args.name;
      const user = lodesh.find(fakeData, { name });
      return user;
    },
  },

  Mutation: {
    createUser(parent, args) {
      const user = args.newUser;
      user.id = Math.floor(Math.random() * 999999);
      fakeData.push(user);
      return user;
    },
    updateUser(parent, args) {
      const { id, name, role, age, isEmployee } = args.updatedUser;
      let updateUserName;

      fakeData.forEach((item) => {
        if (item.id == id) {
          item.name = name;
          item.age = age;
          item.role = role;
          item.isEmployee = isEmployee;
          updateUserName = item;
        }
      });

      return updateUserName;
    },
    deleteUser(parent, args) {
      const { id } = args.delUser;
      lodesh.remove(fakeData, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
