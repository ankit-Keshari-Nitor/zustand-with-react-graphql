import gql from "graphql-tag";

export const ALL_USERS = gql`
  query Users {
    users {
      name
      role
      id
      isEmployee
      age
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($newUser: CreateUser!) {
    createUser(newUser: $newUser) {
      role
      name
      isEmployee
      age
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($updatedUser: UpdateUser!) {
    updateUser(updatedUser: $updatedUser) {
      id
      name
      role
      age
      isEmployee
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($delUser: DeleteUser!) {
    deleteUser(delUser: $delUser) {
      id
    }
  }
`;
