import { gql } from "@apollo/client";

export const LOAD_USER = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
