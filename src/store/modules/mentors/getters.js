export default {
  mentorList(state) {
    return state.mentorList;
  },
  hasMentors(state) {
    return state.mentorList && state.mentorList.length > 0;
  },
};
