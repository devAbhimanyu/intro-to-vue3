export default {
  async registerMentor(context, data) {
    const userId = context.rootGetters.userId;

    const mentorInfo = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-test-app-7ba88-default-rtdb.asia-southeast1.firebasedatabase.app/mentors/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(mentorInfo),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit("registerMentor", {
      ...mentorInfo,
      id: userId,
    });
  },
  async loadMentors(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-test-app-7ba88-default-rtdb.asia-southeast1.firebasedatabase.app/mentors.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const mentors = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      mentors.push(coach);
    }

    context.commit("setMentors", mentors);
    context.commit("setFetchTimestamp");
  },
};
