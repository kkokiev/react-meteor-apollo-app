import { createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';

const testSchema = `
  type Query {
    hi: String
  }
`;

//all schemas
const typeDefs = [
  testSchema,
  ResolutionsSchema
];

//server-side code
const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
