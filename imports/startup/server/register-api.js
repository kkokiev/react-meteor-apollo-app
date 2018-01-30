import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

import UsersSchema from '../../api/users/user.graphql';
import UsersResolvers from '../../api/users/resolvers';

import GoalsSchema from '../../api/goals/goals.graphql';
import GoalsResolvers from '../../api/goals/resolvers';

//111

// all schemas
const typeDefs = [
  ResolutionsSchema,
  UsersSchema,
  GoalsSchema
];

const resolvers = merge(
  ResolutionsResolvers,
  UsersResolvers,
  GoalsResolvers
);

// combine resolvers
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
