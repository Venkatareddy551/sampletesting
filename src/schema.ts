import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type details{
    name: String
    age: Int
  }
  type Query {
    details: [details]
  }
`;