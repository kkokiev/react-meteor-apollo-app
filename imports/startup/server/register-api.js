import { createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';

const testSchema = `
  type Query {
    hi: String,
    resolutions: [Resolution]
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
    },
    resolutions() {
      return [
        {
          _id: "asdasd",
          name: "Get stuff done"
        },
        {
          _id: "123123",
          name: "Second name"
        }
      ]
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
