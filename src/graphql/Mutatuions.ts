import { gql } from "@apollo/client";

export const CREATE_FORM = gql`
  mutation CreateForm(
    $event: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
    $phoneNumber: String!
    $gender: String!
    $interest: [String!]!
    $address: String!
    $city: String!
    $noOfTickets: Int!
    $eventDate: String!
  ) {
    createForm(
      event: $event
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
      phoneNumber: $phoneNumber
      gender: $gender
      intrest: $interest
      address: $address
      city: $city
      noOfTickets: $noOfTickets
      eventDate: $eventDate
    ) {
      id
      firstName
      lastName
      phoneNumber
    }
  }
`;

export const DELETE_FORM = gql`
  mutation DeleteForm($id: Int!) {
    deleteForm(id: $id) {
      message
    }
  }
`;
