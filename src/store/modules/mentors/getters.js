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
};
