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

export const LOAD_FORM = gql`
  query {
    getAllForms {
      id
      event
      firstName
      lastName
      email
      password
      username
      phoneNumber
      gender
      intrest
      address
      city
      noOfTickets
      eventDate
    }
  }
`;
