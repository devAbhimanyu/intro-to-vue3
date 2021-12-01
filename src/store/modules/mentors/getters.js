export default {
  mentorList(state) {
    return state.mentorList;
  },
  hasMentors(state) {
    return state.mentorList && state.mentorList.length > 0;
  },
  isMentor(_, getters, _2, rootGetters) {
    const mentorList = getters.mentorList;
    const userId = rootGetters.userId;
    return mentorList.some((mentor) => mentor.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
