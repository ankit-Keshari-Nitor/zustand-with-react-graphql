const fakeData = [
  {
    id: 101,
    name: "User 1",
    age: 24,
    isEmployee: true,
    role: "WebDeveloper",
    friends: [
      {
        id: 102,
        name: "User 2",
        age: 21,
        isEmployee: true,
        role: "Tester",
      },
      {
        id: 103,
        name: "User 3",
        age: 20,
        isEmployee: false,
        role: "SoftwareEngineer",
      },
      {
        id: 104,
        name: "User 4",
        age: 27,
        isEmployee: true,
        role: "WebDeveloper",
      },
    ],
  },
  {
    id: 102,
    name: "User 2",
    age: 21,
    isEmployee: true,
    role: "Tester",
    friends: [
      {
        id: 103,
        name: "User 3",
        age: 20,
        isEmployee: false,
        role: "SoftwareEngineer",
      },
      {
        id: 104,
        name: "User 4",
        age: 27,
        isEmployee: true,
        role: "WebDeveloper",
      },
    ],
  },
  {
    id: 103,
    name: "User 3",
    age: 20,
    isEmployee: false,
    role: "SoftwareEngineer",
    friends: [
      {
        id: 104,
        name: "User 4",
        age: 27,
        isEmployee: true,
        role: "WebDeveloper",
      },
    ],
  },
  {
    id: 104,
    name: "User 4",
    age: 27,
    isEmployee: true,
    role: "WebDeveloper",
    friends: [
      {
        id: 103,
        name: "User 3",
        age: 20,
        isEmployee: false,
        role: "SoftwareEngineer",
      },
    ],
  },
];

module.exports = { fakeData };
