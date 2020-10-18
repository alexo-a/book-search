import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook {
        saveBook(input: { 
            bookAuthorsArray:["alexo"],
            title:"alextitle",
            description:"alexdescr",
            bookId:"1234",
            image:"image", 
            link:"linky"
        }){
            user{
                username
                email
                bookCount
                savedBooks {
                    bookId
                }
            }
        }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        user{
            username
            email
            bookCount
            savedBooks  {
                bookId
            }
        }
    }
  }
`;
