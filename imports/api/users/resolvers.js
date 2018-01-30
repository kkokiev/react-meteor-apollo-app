const UsersResolvers =  {
  Query: {
    user(obj, args, { user }) {
      return user || {};
    }
  },
  User: {
    email: user => user.emails[0].address
  }
}

export default UsersResolvers;
