import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

const testSchema = `
  type Query {
    hi: String,
    resolutions: [Resolution]
  }
`;

// all schemas
const typeDefs = [
  testSchema,
  ResolutionsSchema
];

// server-side code
const resolver = {
  Query: {
    hi() {
      return 'Hello Level Up';
    }
  }
};

const resolvers = merge(
  resolver, ResolutionsResolvers
);

// combine resolvers
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
