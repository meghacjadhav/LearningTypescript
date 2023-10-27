import {gql} from "@apollo/client";

export const courseLists = gql`
  query {
  courseListRead {
    _id
    title
    index
    coverImage
  }
}
`