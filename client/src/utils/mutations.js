import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!){
      login(email: $email, password: $password){
          token
          user{
              _id
              uername
          }
      }
  }
`;

export const ADD_USER = gql`
  mutation adduser($username: String!, $email: String!, $password: String!){
      addUser(username: $username, email: $email, password: $password){
          token
          user{
              _id
              username
          }
      }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: saveInput!){
      saveBook(bookData: $bookData)
      {
          _id
          username
          emaiil
          savedBooks{
              bookId
              authors
              image
              description
              title
              link
          }
      }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!){
      removeBook(bookId: $bookId){
          _id
          username
          emaiil
          savedBooks{
              bookId
              authors
              image
              description
              title
              link
      }
  }
`;