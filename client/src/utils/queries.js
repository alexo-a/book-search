import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors {
            author
        }
        description
        title
        image
        link
      }
    }
  }
`;