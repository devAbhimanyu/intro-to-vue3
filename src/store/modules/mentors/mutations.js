export default {
  registerMentor(state, payload) {
    state.mentorList.push(payload);
  },
  setMentors(state, payload) {
    state.mentorList = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
