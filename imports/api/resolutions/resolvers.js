import Resolutions from './resolutions';

const ResolutionsResolvers = {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  }
};

export default ResolutionsResolvers;
