import Resolutions from './resolutions';
import Goals from '../goals/goals';

const ResolutionsResolvers = {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({ userId }).fetch();
    }
  },

  Resolution: {
    goals: resolution =>
      Goals.find({
        resolutionId: resolution._id
      }).fetch()
  },

  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({ name, userId });
      return Resolutions.findOne(resolutionId);
    }
  }
};

export default ResolutionsResolvers;
