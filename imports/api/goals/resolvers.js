import Goals from './goals';

const GoalsResolvers = {
  Mutation: {
    createGoal(obj, { name, resolutionId }) {
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      });
      return Goals.findOne(goalId);
    }
  }
};

export default GoalsResolvers;